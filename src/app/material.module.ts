import {NgModule} from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatTooltipModule,
  MatSelectModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatGridListModule
} from '@angular/material';

import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatGridListModule

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class MaterialModule {}