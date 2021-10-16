import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './landing-routing.module';
import { LandingPage } from './landing.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    TranslateModule,
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}