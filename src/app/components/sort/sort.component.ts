import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Configuration} from "../../constants";
import { ApiService} from "../../services/api.service";
import {Params} from "@angular/router";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {


  searchTypes: string[] = [
    'HOUSE', 'HOUSEPART'
  ];

  limitControl: FormControl;
  priceFromControl: FormControl;
  priceToControl: FormControl;
  queryControl: FormControl;
  typeControl:string =  '';


  limitValue = this._configuration.defaultLimitValue;
  priceToValue = '';
  priceFromValue = '';
  queryValue = '';



  constructor(
    private formBuilder: FormBuilder,
    private _configuration: Configuration,
    private apiService: ApiService,) { }

  ngOnInit() {
    this.limitControl = new FormControl (this.limitValue, [Validators.min(1)]);
    this.priceFromControl = new FormControl ('', [Validators.min(1)]);
    this.priceToControl = new FormControl ('', [Validators.min(1)]);
    this.queryControl = new FormControl ('', [Validators.min(1)]);

    this.limitControl.valueChanges.subscribe((value) =>
      this.limitValue = value);

    this.priceFromControl.valueChanges.subscribe((value) =>
      this.priceFromValue = value);

    this.priceToControl.valueChanges.subscribe((value) =>
      this.priceToValue = value);

    this.queryControl.valueChanges.subscribe((value) =>
      this.queryValue = value);
  }

  public submitSearch(e) {
    if (this.typeControl === undefined) this.typeControl = '';
    if (this.priceFromValue === null) this.priceFromValue = '';
    if (this.priceToValue === null) this.priceToValue = '';
      this.apiService.getProperties(
        this.limitValue,
        this.typeControl,
        String(this.priceFromValue),
        String(this.priceToValue),
        this.queryValue ).subscribe((data) => this.parseFeedData(data), err => console.error(err),
        () => console.log('done'));
  }

  private parseFeedData(data) {
    console.log(data);
  }


}
