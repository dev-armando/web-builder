import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../service/login.service';

interface SignUpResp {
  err:Object
  code:Number
  user:Object
  token:string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  controlChangePasswordText:boolean = true; 
  constructor(
    private fb:FormBuilder,
    private loginService:LoginService,
    public alertController: AlertController,
    private translate:TranslateService,
    private router:Router,
    private loadingController:LoadingController
  ) { }

  ngOnInit() {
  } 

  signupForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/)]],
    last_name:['',[Validators.required,Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/)]],
    email:['',[Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,}")]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z.#$%*_\d]{8,}$/)]],
    repeat_password:['',[Validators.required]],
    agree:[false],
    old:[false]

  },{validator:this.checkPasswords})

  checkPasswords(form: FormGroup) { // funcion syncrona para verificar que las contraseñas coinciden
    let pass = form.controls.password.value;
    let confirmPass = form.controls.repeat_password.value;
    if(pass !== confirmPass){
      form.controls.repeat_password.setErrors({ 'repeatInvalid' : true })
    }
  
    return null     
  }


  ionViewWillEnter(){
  
    
}

  async create(){
  let loading = await this.loadingController.create({
    message:this.translate.instant("loading"),
    duration:10000

  })

  loading.present()
  this.loginService.create(this.signupForm.value).subscribe(async (resp:SignUpResp)=>{
    
    loading.dismiss()
   
      let alert = await this.alertController.create({
      
        header: this.translate.instant("sign_up.success.title"),
        message: this.translate.instant("sign_up.success.msg"),
        buttons: [this.translate.instant("sign_up.success.button")]
      });
  
      await alert.present();
      this.router.navigate(["/login"])
    
    
  }, async (err) =>{
    loading.dismiss()
    
    if(err.error == 'user-already-exists'){
      let alert = await this.alertController.create({
                    
        header: this.translate.instant("sign_up.wrong.email.title"),
        message: this.translate.instant("sign_up.wrong.email.msg"),
        buttons: [this.translate.instant("sign_up.wrong.email.button")]
      });

      await alert.present();
    }

    if(err.error.responseCode == 535){
      let alert = await this.alertController.create({
                  
        header: this.translate.instant("sign_up.wrong.email.title_2"),
        message: this.translate.instant("sign_up.wrong.email.msg_2"),
        buttons: [this.translate.instant("sign_up.wrong.email.button")]
      }); 


      await alert.present();
      this.router.navigate(["/login"])
    }
    
  })
}
changePasswordText(){
  this.controlChangePasswordText = !this.controlChangePasswordText
}
}

