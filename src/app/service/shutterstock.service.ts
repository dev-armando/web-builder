import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShutterstockService {
  header: object = {headers: new HttpHeaders({"access-token":localStorage.getItem('token')})}; 
  url:string = environment.URL_API + '/file/import';
  url_license:string = environment.URL_API + '/file/license';

  constructor(
    private http: HttpClient
  ){}

  getImg(search:string):Observable<any>{
    return this.http.get(`${this.url}/img/${search}`,  this.header ) 
  }

  getAudio(search:string):Observable<any>{
    return this.http.get(`${this.url}/audio/${search}`,  this.header ) 
  }

  getVideo(search:string):Observable<any>{
    return this.http.get(`${this.url}/video/${search}`,  this.header ) 
  }

  getLicenseImg(id:any):Observable<any>{
    return this.http.get(`${this.url_license}/img/${id}`,  this.header ) 
  }
  getLicenseAudio(id:any):Observable<any>{
    return this.http.get(`${this.url_license}/audio/${id}`,  this.header ) 
  }
  getLicenseVideo(id:any):Observable<any>{
    return this.http.get(`${this.url_license}/video/${id}`,  this.header ) 
  }

  loadFile(res){
    let loader:any = [] ; 
    console.log(res)
    if(res.length > 0){

      for (let i = 0; i < res.length; i++) {
        loader[i] = {}
 
        loader[i].name= res[i].description;
        
        if(res[i].media_type == 'image'){
          loader[i].type= 'image/jpeg';
          loader[i].code = res[i].assets.preview_1000.url
        }else if(res[i].media_type == 'audio' ){
          loader[i].type= 'audio/mpeg';
          loader[i].code = res[i].assets.preview_mp3.url
          
        }else{
          loader[i].type= 'video/mp4';
          loader[i].code = res[i].assets.preview_mp4.url
        }
            
        
        loader[i].size= 0; 
        loader[i].id_file= res[i].id; 
        loader[i].pay = true ; 
        
      }
    }

    return loader; 
  }
  
 
}