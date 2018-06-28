import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Property} from "../../models/property";
import { ApiService} from "../../services/api.service";
import { Configuration } from '../../constants';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  public property: Property;
  public id: string;
  breakpoint: number = 2;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private location: Location,
              private _configuration: Configuration) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.apiService.getProperty(
        this.id ).subscribe((data) =>  {
        this.parseFeedData(data);
      });

    });
  }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '375px',
        height: '100%',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];
  }

  /**
   * Operate with data
   * @param data
   */

  private parseFeedData(data) {
    this.property =  data;

    let newImages = [];

    for (let _i = 0; _i < this._configuration.defaultGalleryItemsValue; _i++) {
      newImages.push({
        'small': data['pictures'][_i],
        'medium': data['pictures'][_i],
        'big': data['pictures'][_i]
      });
    }
    this.galleryImages = newImages;
  }



  /**
   * Go Back JS
   * @param e
   */

  public goBack(e) {
    e.preventDefault();
    this.location.back();
  }

  /**
   * Responsive Gallery and table sections
   * @param event
   */

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth < 767) ? 1 : 2;
  }

}
