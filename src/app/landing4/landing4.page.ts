import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing4',
  templateUrl: './landing4.page.html',
  styleUrls: ['../landing/landing.page.scss'],
})
export class Landing4Page implements OnInit {
  typeOfUser: number;
  imgProfile: string;

  constructor(
    public translate: TranslateService,
    private router: Router
    ) { }

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
    this.typeOfUser = parseInt(localStorage.getItem('typeOfUser'))
    if(this.typeOfUser == 0)
      this.router.navigate(["/landing2"],{preserveFragment:false,replaceUrl:false})
    localStorage.setItem('step', '3' );
  }

  btnNext(){
    this.router.navigate(["/landing5"],{preserveFragment:false,replaceUrl:false})
  }

}
