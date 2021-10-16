import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) {
  
   }
  
  
   geo = {
    ip:'',
    country:'',
    city:''
   }
  
  getIP(){
    this.http.get('https://extreme-ip-lookup.com/json/').subscribe((resp:any)=>{
      this.geo.ip = resp.query
      this.geo.country = resp.country
      this.geo.city = resp.city
      
    })
  }
  
  create(body){
    body.geo = this.geo
    return this.http.post(`${environment.URL_API}/user/create`,body)
  }
  
  auth(body){
    body.geo = this.geo
    return this.http.post(`${environment.URL_API}/user/auth`,body)
  }
  
  connections(){
    return this.http.get(`${environment.URL_API}/user/connections`,
    {
      headers: new HttpHeaders({"access-token":localStorage.getItem('token')})
    }
    )
  }


  forgot(body){
    return this.http.post(`${environment.URL_API}/user/forgot`,body)
  }

  verifyToken(token){
    return this.http.post(`${environment.URL_API}/user/verifytoken`,{token})
  }

  newPassword(body){
    return this.http.post(`${environment.URL_API}/user/newpassword`,body)   
  }

  resend(body){
    return this.http.post(`${environment.URL_API}/user/resend`,body)
  }

  verification(token){
    return this.http.post(`${environment.URL_API}/user/verification`,{token})
  }


}
