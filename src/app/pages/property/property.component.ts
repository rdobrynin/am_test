import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Property} from "../../models/property";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  public property: Property;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
