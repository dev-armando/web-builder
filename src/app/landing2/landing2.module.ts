import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Landing2PageRoutingModule } from './landing2-routing.module';
import { Landing2Page } from './landing2.page';
import { TranslateModule } from '@ngx-translate/core';
import { PoliticasCookiesComponent } from '../components/politicas-cookies/politicas-cookies.component';
import { LangLoginComponent } from '../components/lang-login/lang-login.component';
import { LangFooterComponent } from '../components/lang-footer/lang-footer.component';

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    Landing2PageRoutingModule,
    TranslateModule
  ],
  declarations: [Landing2Page , PoliticasCookiesComponent , LangLoginComponent , LangFooterComponent ],
  exports: [PoliticasCookiesComponent , LangLoginComponent , LangFooterComponent ]
})
export class Landing2PageModule {}
