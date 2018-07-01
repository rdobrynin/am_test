import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { state, trigger, transition, style, animate } from '@angular/animations';
import { ApiService} from "../../services/api.service";
import { Configuration } from '../../constants';
import {Observable} from 'rxjs/Rx';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(800, style({opacity: 1}))
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

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

  getLimitValue: string = this._configuration.defaultLimitValue;
  getType: string = '';
  getPriceFrom: string = '';
  getPriceTo: string = '';
  getQuery: string = '';

  propertyItems: Array<any>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private _configuration: Configuration) {


    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.apiService.getProperties(
        this.getLimitValue,
        this.getType,
        this.getPriceFrom,
        this.getPriceTo,
        this.getQuery ).subscribe((data) => this.parseFeedData(data), err => console.error(err),
        () => console.info('done'));
    });

  }

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

  /**
   * Send Search
   * @param e
   */


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
      () => console.info('done'));
  }

  /**
   * Operate with data
   * @param data
   */

  private parseFeedData(data) {
    this.propertyItems = data;
  }

}
