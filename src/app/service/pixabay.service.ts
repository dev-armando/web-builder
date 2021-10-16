import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  url:string = environment.PIXABAY_API_URL;
  url_video:string = environment.PIXABAY_API_URL + '/videos/';
  key:string = environment.PIXABAY_API_TOKEN;

  constructor(
    private http: HttpClient
  ) { }
  getImg(search:string):Observable<any>{
    return this.http.get(`${this.url}?key=${this.key}&lang=es&q=${search}` ); 
  }
  getVideo(search:string):Observable<any>{
    return this.http.get(`${this.url_video}?key=${this.key}&lang=es&q=${search}` ); 
  }
  loadFile(res){
    let loader:any = [] ; 
    let type:string = res.type;
    res = res.hits;
    if(res.length > 0){

      for (let i = 0; i < res.length; i++) {
        loader[i] = {}
 
        loader[i].name= res[i].tags;
        
        if(type == 'img'){
          loader[i].type= 'image/jpeg';
          loader[i].code = res[i].largeImageURL

        }else{
          loader[i].type= 'video/mp4';
          console.log(res[i].videos)
          loader[i].code = res[i].videos.large.url
        }
            
        
        loader[i].size= 0; 
        loader[i].id_file= res[i].id; 
        loader[i].pay = false ; 
        
      }
    }

    return loader; 
  }
}
