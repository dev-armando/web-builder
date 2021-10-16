import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Landing5PageRoutingModule } from './landing5-routing.module';
import { Landing5Page } from './landing5.page';
import { Landing2PageModule } from '../landing2/landing2.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Landing5PageRoutingModule,
    Landing2PageModule,
    TranslateModule
  ],
  declarations: [Landing5Page]
})
export class Landing5PageModule {}
