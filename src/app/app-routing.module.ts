import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpCenterComponent } from './help-center/help-center.component';
import { ComponentComponent } from './component/component.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PartnerComponent } from './partner/partner.component';


const routes: Routes = [

  {
     path:  '', redirectTo:  'presentation', pathMatch:  'full' ,
  },
  {
      path: 'accueil',
      component: AcceuilComponent
  },
  {
      path: 'help-center',
      component: HelpCenterComponent
  }, 
  {
    path : "home/:dir",
    component : ComponentComponent,
  },
  {
    path : "presentation",
    component : PresentationComponent
  },
  {
    path : "partner",
    component : PartnerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
