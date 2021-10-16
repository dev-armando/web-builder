import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { LangsPage } from '../langs/langs.page';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

interface LoginResp {
  code:Number
  user:Object
  token:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  checkSave:boolean = false; 
  controlChangePasswordText:boolean = true; 
  constructor(
    private loginService:LoginService,
    private fb:FormBuilder,
    private alertController:AlertController,
    public translate:TranslateService,
    private router:Router,
    private popover:PopoverController,
    private loadingController:LoadingController,
    private userService: UserService
  ) { }

  ngOnInit() {
    
  }

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })


  async login(){

    let loading =await this.loadingController.create({
      message:this.translate.instant("loading"),
      duration:10000
    })

    loading.present()
 
    
    this.loginService.auth(this.loginForm.value).subscribe(async (token:string)=>{
      loading.dismiss()
      this.loginForm.controls.password.setValue(null)
      
        
        localStorage.setItem("token",token)
        this.router.navigate(["/dashboard"],{preserveFragment:false,replaceUrl:true})
      
    },async (errors)=>{
    
      
      loading.dismiss()

      switch (errors.status) {
        case  401:
          this.wrong()
          break;
        case  404:
          this.wrong()
          break;
      
        case 403:
          let user:any = errors.error

          await Swal.fire({
            title:this.translate.instant("login.noverified.title"),
            text: `${this.translate.instant("login.noverified.msg")}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.translate.instant("login.noverified.buttonResend"),
            cancelButtonText: this.translate.instant("login.noverified.buttonCancel")
          }).then((result) => {
            if (result.isConfirmed){
              this.loginService.resend(user).subscribe(async (resp)=>{
                await Swal.fire({
                  title: this.translate.instant("login.resend.title"),
                  text: this.translate.instant("login.resend.msg"),
                  icon: 'success',
                  confirmButtonColor: '#3085d6',
                  confirmButtonText: this.translate.instant("login.resend.button")
                })
              })
            }
          })
          break;
      }
     
     
      
    })
  }


  async wrong(){
    let alert = await this.alertController.create({
      
      header: this.translate.instant("login.wrong.title"),
      message: this.translate.instant("login.wrong.msg"),
      buttons: [this.translate.instant("login.wrong.button")]
    });

    await alert.present();
    this.loginForm.controls.password.setValue(null)
  }


  async langs(){
    let langs = await this.popover.create({
      component: LangsPage,
      translucent: true

    })

    langs.present()
  }

  changePasswordText(){
    this.controlChangePasswordText = !this.controlChangePasswordText
  }

  onCheckboxChange(e) {

    if (e.target.checked) 
      localStorage.setItem('remember', '1');
     else 
      localStorage.setItem('remember', '0');
    
  }

  ionViewWillEnter(){
     
    let validation:number = parseInt( localStorage.getItem('remember') );
    
    if(validation == 0)
      this.userService.logout(); 
  }

}
