import {NgModule} from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule
  ]
})
export class MaterialModule {}