import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentComponent } from './component/component.component';

import { NgwWowModule } from 'ngx-wow';
import { LayersModule } from './Layers/layers.module';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,   
    ComponentComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    NgwWowModule ,
    LayersModule ,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
