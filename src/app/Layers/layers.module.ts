import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

const routes: Routes = [];

@NgModule({
  declarations: [HeaderComponent,
     FooterComponent
    ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
  ],
  exports : [HeaderComponent,FooterComponent]
})
export class LayersModule { }
