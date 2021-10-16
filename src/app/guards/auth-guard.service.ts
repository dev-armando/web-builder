import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

constructor(
  private UserService:UserService,
  private router:Router
) { }

  async canActivate(){

 
  if(await this.UserService.verifyToken().then((resp)=>{
    return true
  })
  .catch(()=>{
 
    return false
  })){
    return true
  }else{
    this.router.navigate(["/"])
      return false
  }

  
 
 
}

}
