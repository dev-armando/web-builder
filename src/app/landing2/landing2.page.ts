import { Component, OnInit, ViewChild,  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonContent, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing2',
  templateUrl: './landing2.page.html',
  styleUrls: ['../landing/landing.page.scss'],
})
export class Landing2Page implements OnInit {


  sector_options = Array(35).map((x,i)=>i)
  @ViewChild(IonContent) content: IonContent;

  constructor(
    public translate:TranslateService,
    private popover:PopoverController,
    private router:Router
  ) { }

  ngOnInit() {}

  btnTypeOfUser(opcion:number){
    // opcion 1 = INVERSOR
    // opcion 2 = DESARROLLADOR
    // opcion 3 = EMPRENDEDOR
    localStorage.setItem('typeOfUser', opcion.toString() );
    this.router.navigate(["/landing3"],{preserveFragment:false,replaceUrl:false})

  } 

  ionViewWillEnter(){
    localStorage.setItem('step', '1' );
    localStorage.setItem('typeOfUser', '0' );
  }
 

}
