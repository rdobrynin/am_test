import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common';
import { Property} from "../../models/property";
import { ApiService} from "../../services/api.service";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  public property: Property;
  public id: string;
  breakpoint: number = 2;

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private location: Location) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.apiService.getProperty(
        this.id ).subscribe((data) => this.parseFeedData(data));
    });
  }

  /**
   * Operate with data
   * @param data
   */

  private parseFeedData(data) {
    this.property = data;
    console.log(this.property );
    console.log(this.property.metadata['Kindlustusmakse ERGOs (tegemist on näitliku kuumaksega)']);
  }

  public goBack(e) {
    e.preventDefault();
    this.location.back();
  }

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth < 767) ? 1 : 2;
  }

}
