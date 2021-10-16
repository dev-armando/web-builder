import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing6',
  templateUrl: './landing6.page.html',
  styleUrls: ['./landing6.page.scss'],
})
export class Landing6Page implements OnInit {
  typeOfUser: number;
  imgProfile: string;
  sector_options = Array(35).map((x,i)=>i)

  constructor(
    public translate: TranslateService,
    private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.init()   
    this.setImgProfile(this.typeOfUser)
  }

  setImgProfile(typeOfUser:number){
    if(typeOfUser == 1)
      this.imgProfile = 'inversor'; 
    else if(typeOfUser == 2)
     this.imgProfile = 'programador'; 
     else 
      this.imgProfile = 'emprendedor'; 
    
  }
  private init(){
    localStorage.setItem('step', '4' );
    this.typeOfUser = parseInt(localStorage.getItem('typeOfUser'))
    if(this.typeOfUser == 0)
      this.router.navigate(["/landing2"],{preserveFragment:false,replaceUrl:false})
  }

  btnNext(){
    this.router.navigate(["/landing6"],{preserveFragment:false,replaceUrl:false})
  }
}
