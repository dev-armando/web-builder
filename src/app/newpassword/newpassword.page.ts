import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.page.html',
  styleUrls: ['./newpassword.page.scss'],
})
export class NewpasswordPage implements OnInit {
  token:string = null
  valid: boolean;
  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private loginService:LoginService,
    private alertController:AlertController,
    private translate:TranslateService,
    private router:Router
  ) { 
    route.queryParams.subscribe((data)=>{
      this.token = data.token
      
    })
  }

ngOnInit(){

}

  ionViewDidEnter(){
    this.verifyToken(this.token)
    
  }

  verifyToken(token){
    this.loginService.verifyToken(token).subscribe((resp:{code:number})=>{
     if(resp.code == 200){
      this.valid = true
     }else{
       this.valid = false
     }
      
    })
  }

  newPasswordForm = this.fb.group({
    password:['',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
    repeat_password:['',[Validators.required]]
  },{validator:this.checkPasswords})

  checkPasswords(form: FormGroup) { // funcion syncrona para verificar que las contraseñas coinciden
    let pass = form.controls.password.value;
    let confirmPass = form.controls.repeat_password.value;
    if(pass !== confirmPass){
      form.controls.repeat_password.setErrors({ 'repeatInvalid' : true })
    }
  
    return null     
  }


  accept(){
    let pass = this.newPasswordForm.value
    pass.token = this.token
    this.loginService.newPassword(pass).subscribe(async (resp:any)=>{
      if(resp.code == 200){
        let alert = await this.alertController.create({
      
          header: this.translate.instant("new_password.success.title"),
          message: this.translate.instant("new_password.success.msg"),
          buttons: [this.translate.instant("new_password.success.button")]
        });
    
        await alert.present();
        this.router.navigate(["/login"],{preserveFragment:false,replaceUrl:true})

      }else{
        let alert = await this.alertController.create({
      
          header: this.translate.instant("new_password.wrong.title"),
          message: this.translate.instant("new_password.wrong.msg"),
          buttons: [this.translate.instant("new_password.wrong.button")]
        });
    
        await alert.present();
      }
      
    })
  }

}
