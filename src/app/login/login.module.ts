import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PoliticasCookiesComponent } from '../components/politicas-cookies/politicas-cookies.component';
import { Landing2PageModule } from '../landing2/landing2.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    TranslateModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    Landing2PageModule
  
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
