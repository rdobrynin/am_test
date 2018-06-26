import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavigationEnd, ResolveEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test project';

  constructor(private activatedRoute: ActivatedRoute) {

  }

  public ngOnInit() {
    // this.activatedRoute.queryParams.subscribe((params: Params) => {
    //     this.getProperties('10', '', '', '', '');
    // });

  }
  //
  // public getProperties(limit, type, priceFrom, priceTo, query) {
  //   this.apiService.getProperties(limit, type, priceFrom, priceTo, query ).subscribe((data) => this.parseFeedData(data));
  // }


  private parseFeedData(data) {
    console.log(data);
  }
}
