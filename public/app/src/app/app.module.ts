import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRouting } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
