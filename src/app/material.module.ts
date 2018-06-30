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
  MatGridListModule,
  MatFormFieldModule
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
    MatGridListModule,
    MatFormFieldModule

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
    MatGridListModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}