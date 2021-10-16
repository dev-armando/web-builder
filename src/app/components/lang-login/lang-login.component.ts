import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LangsPage } from 'src/app/langs/langs.page';

@Component({
  selector: 'app-lang-login',
  templateUrl: './lang-login.component.html',
  styleUrls: ['./lang-login.component.scss']
})
export class LangLoginComponent implements OnInit {

  constructor(
    public translate: TranslateService ,
    public popover: PopoverController
    ) {

  }

  ngOnInit(): void {
  }
 

  async langs(){
    let langs = await this.popover.create({
      component: LangsPage,
      translucent: true

    })

    langs.present()
  }

}
