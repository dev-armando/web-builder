import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lang-footer',
  templateUrl: './lang-footer.component.html',
  styleUrls: ['./lang-footer.component.scss']
})
export class LangFooterComponent implements OnInit {
  controlPoliCook:boolean = true ; 

  constructor(
    public translate: TranslateService,
    private alert:AlertController,
    public location: Location 
    ) {
    translate.addLangs(["es","en"])
    translate.setDefaultLang('es');
    translate.use('es')
   }

  ngOnInit(): void {
  }

  btnBack(){
    this.location.back(); 
  }

  btnLanding(){
    this.presentConfirm()
  }
  btnSave(){
    Swal.fire({
      title: this.translate.instant("confirmation_message"),
      text: this.translate.instant("save_construction"),
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant("yes"),
      cancelButtonText: 'No'
    }).then((result) => {
     
    })
  }
  presentConfirm() {

    Swal.fire({
      title: this.translate.instant("confirmation_message"),
      text: this.translate.instant("cancel_construction"),
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant("yes"),
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.assign(`http://${window.location.host.toString()}/#/inicio`);
      }
    })
    
  }
 
}
