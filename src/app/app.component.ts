import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vitrineSpotfit';
  chngmode : boolean = false ;
  imgMode = true ;
  partnerRooms = "normal_mode"
  

  constructor (private themeService: ThemeService , private spinner: NgxSpinnerService){
    this.spinner.show();
 
    setTimeout(() => {      
      this.spinner.hide();
    }, 3000);
    
    this.setLightbulb();
    this.toggleTheme();
    this.toggleTheme();   
  }

  setLightbulb() {
    if (this.themeService.isDarkTheme()) {
      this.chngmode =! this.chngmode ;
    } else {
      this.chngmode =! this.chngmode ;
    }
  }

  toggleTheme() {
  
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
    this.setLightbulb();
    
  }

  changeImg(){
    this.imgMode = !this.imgMode;
    if(this.imgMode){
      this.partnerRooms = "normal_mode";
    }
    else{
      this.partnerRooms = "night_mode";
    }
  }  

}
