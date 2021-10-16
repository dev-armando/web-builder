import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Landing4PageRoutingModule } from './landing4-routing.module';
import { Landing4Page } from './landing4.page';
import { Landing2PageModule } from '../landing2/landing2.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Landing4PageRoutingModule,
    Landing2PageModule,
    TranslateModule
  ],
  declarations: [Landing4Page]
})
export class Landing4PageModule {}
