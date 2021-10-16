import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor(    
    public translate:TranslateService,
    private router:Router
    ) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    setTimeout(()=>{
      this.router.navigate(["/landing2"],{preserveFragment:false,replaceUrl:false
      })} , 4000 )
  }
}
