import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { WindowRefService } from 'src/app/services/window-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuactive : boolean = false ;
  headrscrll : boolean ;
  constructor( @Inject(DOCUMENT) private document: Document , private windowRef:WindowRefService ) { }

  ngOnInit() {
    
  }

  // varmenu(){
  //   this.menuactive =! this.menuactive ;    
  // }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   let number =  this.document.documentElement.scrollTop || this.document.body.scrollTop ;
  //   // let width = this.windowRef.nativeWindow.innerWidth ;   
  //   if ( number > 70 ) {
  //      this.headrscrll = true ;            
  //   } else if ( number <= 50  ) {
  //     this.headrscrll = false ;
  //   }      
  //   } 
    
}
