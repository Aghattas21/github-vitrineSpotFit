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
import { HelpCenterComponent } from './help-center/help-center.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PartnerComponent } from './partner/partner.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,   
    ComponentComponent, HelpCenterComponent, FormContactComponent, AcceuilComponent, PresentationComponent, PartnerComponent, ContactFormComponent  
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
