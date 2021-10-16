import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { MultimediaPageRoutingModule } from './multimedia-routing.module';

import { MultimediaPage } from './multimedia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultimediaPageRoutingModule,
    TranslateModule,
    
  ],
  declarations: [MultimediaPage]
})
export class MultimediaPageModule {}
