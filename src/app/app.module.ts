import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { HomeComponent } from './pages/home/home.component';
import { PropertyItemComponent } from './components/property-item/property-item.component';
import { PropertyComponent } from './pages/property/property.component';
import { ApiService } from './services/api.service';
import { Configuration } from './constants';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxGalleryModule } from 'ngx-gallery';
import { GenerateArrayPipe } from './pipes/generate-array.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'property/:id', component: PropertyComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyItemComponent,
    PropertyComponent,
    HeaderComponent,
    GenerateArrayPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ApiService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
