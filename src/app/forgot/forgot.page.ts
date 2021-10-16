import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';

interface resp {
  code:Number
  user:Object
  err:Object
}
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(
    private fb:FormBuilder,
    private loginService:LoginService,
    private alertController:AlertController,
    private translate:TranslateService,
    private router:Router,
    private loadingController:LoadingController
  ) { }

  ngOnInit() {
  }

  forgotForm = this.fb.group({
    email:['',[Validators.email,Validators.required]]
  })

  async send(){
    let loading =await this.loadingController.create({
      message:this.translate.instant("loading"),
      duration:10000

    })
    loading.present()
    this.loginService.forgot(this.forgotForm.value).subscribe(async (resp:resp)=>{
      loading.dismiss()
      Swal.fire({
        title: this.translate.instant("forgot.success.title"),
        text: this.translate.instant("forgot.success.msg"),
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: this.translate.instant("forgot.success.button")
      })
      this.router.navigate(["/login"],{preserveFragment:false,replaceUrl:true})
    },async(err)=>{
      loading.dismiss()
      await Swal.fire({
        title: this.translate.instant("forgot.wrong.title"),
        text: this.translate.instant("forgot.wrong.msg"),
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: this.translate.instant("forgot.wrong.button")
      })
    })
  }

}
