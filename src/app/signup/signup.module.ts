import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PoliticasCookiesComponent } from '../components/politicas-cookies/politicas-cookies.component';
import { Landing2PageModule } from '../landing2/landing2.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    TranslateModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    Landing2PageModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
