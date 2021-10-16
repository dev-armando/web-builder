import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Landing3PageRoutingModule } from './landing3-routing.module';
import { Landing3Page } from './landing3.page';
import { TranslateModule } from '@ngx-translate/core';
import { Landing2PageModule } from '../landing2/landing2.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule ,
    Landing3PageRoutingModule,
    Landing2PageModule
  ],
  declarations: [Landing3Page ]
})
export class Landing3PageModule {}
