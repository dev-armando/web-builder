import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from './service/login.service';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home' 
    },
    {
      title: 'Multimedia',
      url: '/multimedia',
      icon: 'document-attach'
    },
   

    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translateService: TranslateService,
    private loginService:LoginService,
    public userService:UserService,
    private router:Router
  ) {
    loginService.getIP()
    this.initializeApp();
    translateService.addLangs(["es","en"])
    translateService.setDefaultLang('es');
    translateService.use('es'); 
    userService.verifyToken().then(()=>{
      this.router.navigate(["/dashboard"])
    }).catch((err)=>{
      
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.userService.logout()
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
