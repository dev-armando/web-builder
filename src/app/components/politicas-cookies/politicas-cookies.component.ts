import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-politicas-cookies',
  templateUrl: './politicas-cookies.component.html',
  styleUrls: ['./politicas-cookies.component.css']
})
export class PoliticasCookiesComponent implements OnInit {
  controlPoliCook:boolean = true ; 

  constructor(public translate: TranslateService) {
    translate.addLangs(["es","en"])
    translate.setDefaultLang('es');
    translate.use('es')
   }

  ngOnInit(): void {
    if( !localStorage.getItem('politicas') )
      localStorage.setItem('politicas' , 'true')

    this.controlPoliCook = (localStorage.getItem('politicas') == 'true')
  }
  desctivar(){
    this.controlPoliCook = false;
    localStorage.setItem('politicas' , 'false')
  }

  privacidad(){
    console.log(`http://${window.location.host.toString()}/#/politica/privacidad`)
    window.location.assign(`http://${window.location.host.toString()}/#/politica/privacidad`);
  }
  terminos(){
    window.location.assign(`http://${window.location.host.toString()}/#/politica/terminos`);
  }
  cookies(){
    window.location.assign(`http://${window.location.host.toString()}/#/politica/cookies`);
  }

}
