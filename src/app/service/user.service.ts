import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


export interface User {
  name:string
  last_name:string
  email:string
  role:string
  photo:string
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

constructor(
  private http:HttpClient
) { }


public User:User 

setUser(user:User){
  this.User = user
}

getUser(){
  return this.User
}

logout(){
  localStorage.clear()

  this.User = undefined
}


async verifyToken():Promise<Boolean> {
  return await new Promise((resolve,reject)=>{
    if(this.User == undefined){
      if(localStorage.getItem('token') != null){
        this.http.get(`${environment.URL_API}/user/user`,
        {
          headers: new HttpHeaders({"access-token":localStorage.getItem('token')})
        }
        ).subscribe(async (resp:any)=>{
      
        
          
       
            await this.setUser(<User>resp.user)
            resolve(true)
         
       
          
        },err=>{
          localStorage.clear()
            reject(false)
          
        })
      }else{
        reject(false)
      }
        }else{
          resolve(true)
        }
  })
 
  }



  sendMessage(body){
    return this.http.post(`${environment.URL_API}/user/contactus`,body)
  }
  
 

}
