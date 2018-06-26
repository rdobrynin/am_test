import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import "hammerjs";
import { HomeComponent } from './pages/home/home.component';
import { PropertyItemComponent } from './components/property-item/property-item.component';
import { PropertyComponent } from './pages/property/property.component';
import { ApiService } from './services/api.service';
import { SortComponent } from './components/sort/sort.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyItemComponent,
    PropertyComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
