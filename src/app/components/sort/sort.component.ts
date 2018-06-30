import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Configuration} from "../../constants";

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



  constructor(private formBuilder: FormBuilder, private _configuration: Configuration) { }

  ngOnInit() {
    this.limitControl = new FormControl (this.limitValue, [Validators.min(1)]);
    this.priceFromControl = new FormControl ('', [Validators.min(1)]);
    this.priceToControl = new FormControl ('', [Validators.min(1)]);
    this.queryControl = new FormControl ('', [Validators.min(1)]);

    this.limitControl.valueChanges.subscribe((value) =>
      this.limitValue = value);

    this.priceFromControl.valueChanges.subscribe((value) =>
      this.priceToValue = value);

    this.priceToControl.valueChanges.subscribe((value) =>
      this.priceFromValue = value);

    this.queryControl.valueChanges.subscribe((value) =>
      this.queryValue = value);
  }

  public submitSearch(e) {
    console.log(this.limitValue);
    console.log(this.priceToValue);
    console.log(this.priceFromValue);
    console.log(this.queryValue);
    console.log(this.typeControl);
  }

}
