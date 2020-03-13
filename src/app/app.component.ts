import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

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
  

  constructor (private themeService: ThemeService , private spinner: NgxSpinnerService, private router :Router){
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

    let mode = this.imgMode ? 'normal_mode' : 'night_mode';
    // if(this.imgMode){
    //   this.partnerRooms = "normal_mode";
      
    // }
    // else{
    //   this.partnerRooms = "night_mode";
    // }

    this.router.navigate(['home', mode]);

  }

}
