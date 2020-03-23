import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentComponent } from './component/component.component';

import { NgwWowModule } from 'ngx-wow';
import { LayersModule } from './Layers/layers.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelpCenterComponent } from './help-center/help-center.component';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PartnerComponent } from './partner/partner.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TestComponent } from './test/test.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,   
    ComponentComponent, HelpCenterComponent,  AcceuilComponent, PresentationComponent, PartnerComponent, ContactFormComponent, TestComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    NgwWowModule ,
    LayersModule ,
    HttpClientModule,
    NgxSpinnerModule,      
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}