import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { state, trigger, transition, style, animate } from '@angular/animations';
import { ApiService} from "../../services/api.service";
import { Configuration } from '../../constants';
import {Observable} from 'rxjs/Rx';

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

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.apiService.getProperties(
        this.getLimitValue,
        this.getType,
        this.getPriceFrom,
        this.getPriceTo,
        this.getQuery ).subscribe((data) => this.parseFeedData(data), err => console.error(err),
        () => console.log('done'));
    });
  }

  /**
   * Operate with data
   * @param data
   */

  private parseFeedData(data) {
    console.log(data);
    this.propertyItems = data;
  }

}
