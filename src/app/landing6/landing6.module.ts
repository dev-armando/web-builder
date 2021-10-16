import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Landing6PageRoutingModule } from './landing6-routing.module';
import { Landing6Page } from './landing6.page';
import { Landing2PageModule } from '../landing2/landing2.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Landing6PageRoutingModule,
    Landing2PageModule,
    TranslateModule
  ],
  declarations: [Landing6Page]
})
export class Landing6PageModule {}
