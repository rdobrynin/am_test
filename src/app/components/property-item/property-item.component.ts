import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.scss']
})
export class PropertyItemComponent implements OnInit {

  @Input() public propertyItem: any;

  constructor() { }

  ngOnInit() {}

}
