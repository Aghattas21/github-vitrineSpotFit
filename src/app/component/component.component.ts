import { Component, OnInit, Inject, HostListener , Input} from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { DOCUMENT } from '@angular/common';
import { WindowRefService } from '../services/window-ref.service'
import { HttpClient } from '@angular/common/http';
import { CustomerRetursService } from '../services/customer-returs.service';
import { IndicatorsService } from '../services/indicators.service';
import 'hammerjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
 
export class ComponentComponent implements OnInit {
  
  @Input() partnerRooms ;

  number : number ;
   
  animateindic : boolean = false ;
  
  chngmode : boolean = false ;

  Indicators = [];
  Indicators_;
  position ="";
  Returns_0: any = [] ;
  Returns_1: any = [] ;
  Returns_2: any = [] ;
  animateLeft = false;
  animateRight = false;
  index;
  x;
  Customer_Returns;
  animationDuration: any = [] ;
  app = false;
  constructor (  @Inject(DOCUMENT) private document: Document ,  
  private wowService: NgwWowService , private windowRef:WindowRefService,
  private http:HttpClient,
  private indicatorsService: IndicatorsService,
  private customerReturnsService: CustomerRetursService,  
  private ar: ActivatedRoute
  ) {    
    ar.paramMap.subscribe(map => {
      this.partnerRooms = map.get('dir');
    })
  }
  

  getCustomerReturs(){
    this.customerReturnsService.findAll()
    .subscribe(dataclass => {
      this.Customer_Returns = dataclass;
      this.FirstCustomer_Returns();
    })
  }
  getIndicators(){
    this.indicatorsService.findAll()
    .subscribe(dataclass => {
      this.Indicators_ = dataclass;
      for(let i = 0 ; i <= 5 ;i++){
        this.Indicators[i] = this.Indicators_[i].percentage *2.5;
        this.animationDuration[i] =  this.Indicators_[i].percentage / 20 ;  
      }
    });
    // setTimeout(() => {
      this.app = true;
    // },100);
   
  }

  ngOnInit() {
    // this.darkMode$ = this.themeService.darkMode$;
    this.wowService.init();
    
    this.getCustomerReturs();
    this.position ="First";
    this.getIndicators();
    }
  
  
   test($event) {
    console.log($event);
  }

  plus() {    
    var last: number = 3200;
    this.number = 0 ;
    for( let i=0 ; i <= last ; i++){
      setTimeout (() => {
              this.number++ ;           
            }, 1500);     
    }     
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number =  this.document.documentElement.scrollTop || this.document.body.scrollTop ;   
    let width = this.windowRef.nativeWindow.innerWidth ;     
    // let expl =this .document.getElementById('indicId') ;    
    
    if ( number > 3815 && width < 565 ){
       this.animateindic = true ;      
    } else if (number > 3720 && width > 565 ){
      this.animateindic = true ;
    }   else if (number > 3605 &&  width > 768){
      this.animateindic = true ;
    }
  }
    
    

    FirstCustomer_Returns(){
      if(this.Customer_Returns[0]){
        this.Returns_0 = this.Customer_Returns[0];
      }else{
        this.Returns_0  = " ";
      }

      if(this.Customer_Returns[1]){
        this.Returns_1 = this.Customer_Returns[1];
      }else{
        this.Returns_1  = " ";
      }  
      if(this.Customer_Returns[2]){
        this.Returns_2 = this.Customer_Returns[2];
      }else{
        this.Returns_2  = " ";
      }  
      if(this.position != "First" )
      {
        this.animateRight = true;
        setTimeout(()=>this.animateLeft = false , 1000);
        setTimeout(()=>this.animateRight = false , 1000);  
      }
      this.position ="First";

  }

  NextReturns(){
    if(this.position != "Next")
    {
      if(this.Customer_Returns[6]){
        this.Returns_0 = this.Customer_Returns[6];
      }
      else{
        this.Returns_0 = " ";
      }
      if(this.Customer_Returns[7]){
        this.Returns_1 = this.Customer_Returns[7];
      }
      else{
        this.Returns_1 = " ";
      }  
      if(this.Customer_Returns[8]){
        this.Returns_2 = this.Customer_Returns[8];
      }
      else{
        this.Returns_2 = " ";
      }
      this.animateLeft = true;
      setTimeout(()=>this.animateLeft = false , 1000);
      setTimeout(()=>this.animateRight = false , 1000);  
      this.position ="Next";
  }
}

  PreviousReturns(){
    if(this.position != "Previous")
    {
      if(this.Customer_Returns[3]){
        this.Returns_0 = this.Customer_Returns[3];
      }
      else{
        this.Returns_0 = " ";
      }
      if(this.Customer_Returns[4]){
        this.Returns_1 = this.Customer_Returns[4];
      }
      else{
        this.Returns_1 = " ";
      }  
      if(this.Customer_Returns[5]){
        this.Returns_2 = this.Customer_Returns[5];
      }
      else{
        this.Returns_2 = " ";
      }
      this.animateRight = true;
      setTimeout(()=>this.animateLeft = false , 1000);
      setTimeout(()=>this.animateRight = false , 1000);    
      this.position ="Previous";
    }
  }

  LastReturns(){
    let index = this.Customer_Returns.length;
    console.log(index);
      if(index % 3 == 0){
        this.Returns_0 = this.Customer_Returns[index-3];
        this.Returns_1 = this.Customer_Returns[index-2];
        this.Returns_2 = this.Customer_Returns[index-1];
      }
      else if(index % 3 == 2){
        this.Returns_0 = this.Customer_Returns[index-2];
        this.Returns_1 = this.Customer_Returns[index-1];
        this.Returns_2 = " ";
      }
      else{
        this.Returns_0 = this.Customer_Returns[index-1];
        this.Returns_1 = " ";
        this.Returns_2 = " ";
      }  
      if(this.position !="Last")
      {
        this.animateLeft = true;
        setTimeout(()=>this.animateLeft = false , 1000);
        setTimeout(()=>this.animateRight = false , 1000); 
      }

    this.position ="Last";
  }
  
  pagination(evt){
        this.x =
        Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? "right" : "left") : "";
        let index = this.Customer_Returns.indexOf(this.Returns_0);
        if(this.x == "left")
        {
          console.log(this.position);
          if(this.position == "Last")
          {
            this.NextReturns();
          }
          else if(this.position == "Next")
          {
            this.PreviousReturns();
          }
          else if(this.position == "Previous"){
            this.FirstCustomer_Returns();
          }
        }
        else if(this.x == "right")
        {
          console.log(this.position);
          if(this.position == "First")
          {
            this.PreviousReturns();
          }
          else if(this.position == "Previous")
          {
            this.NextReturns();
          }
          else if(this.position == "Next"){
            this.LastReturns();
          }
        }
          setTimeout(()=>this.animateLeft = false , 1000);
          setTimeout(()=>this.animateRight = false , 1000);     

  }
   
}
