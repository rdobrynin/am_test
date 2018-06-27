import {NgModule} from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatTooltipModule,
  MatSelectModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatIconModule
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
    MatIconModule

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
    MatIconModule
  ]
})
export class MaterialModule {}