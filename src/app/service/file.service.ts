import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FileService {
  url:string = environment.URL_API + '/file';
  header: object = {headers: new HttpHeaders({"access-token":localStorage.getItem('token')})}; 

  constructor(private http: HttpClient) { }
  upload(body:any):Observable<any>{
    return this.http.post(`${this.url}/create`, body,  this.header ) 
  }

  delete(body:any):Observable<any>{
    return this.http.post(`${this.url}/delete`, body,  this.header ) 
  }


  uploadFromApi(form:any):Observable<any>{
    return this.http.post(`${this.url}/save`, form,  this.header ) 
  }

  get(email):Observable<any>{
    return this.http.get(`${this.url}/get/${email}`,   this.header ) ; 
  }
  createForm(file:any ){
      let form = new FormData();
      form.append('file',file);
      return form; 
    
  }


  createFormToApi(file:any ){

    let form = {}

    form['id_file'] = file.id_file ;
    form['name'] = file.name ;
    form['path'] = file.code ;
    form['size']= file.size;
    form['type'] = file.type ;
  
    return form; 
  }

  preview( d:any , e:any ){
    
    for (let i = 0; i < e.target.files.length; i++) {
      
      let reader = new FileReader(); 
      d.loader[i] = {}
      reader.onload = (e:any) =>{
        if(d.loader[i].type == 'video/mp4' )
          d.loader[i].code = window.URL.createObjectURL(this.base64toBlob(e.target.result));
        else
        d.loader[i].code= e.target.result;

        console.log(this.base64toBlob(e.target.result))
          
      }
      reader.readAsDataURL(e.target.files[i]);
      d.loader[i].name= e.target.files[i].name;
      d.loader[i].type= e.target.files[i].type;
      d.loader[i].size= e.target.files[i].size;
      
    }
  
  }

  loadFile( e:any ){
    let loader = [];

    for (let i = 0; i < e.length; i++) {

      loader[i] = {}
      if(e[i].size == 0)
        loader[i].code =  e[i].dir;    
      else
        loader[i].code = `${this.url}/static/` + e[i].dir.replace('storage/' , '');   

      if(e[i]._id)
      loader[i].id= e[i]._id;
      loader[i].name= e[i].name;
      loader[i].type= e[i].type;
      loader[i].size= e[i].size;
    }
    return loader;
  }

  base64toBlob( base64Data) {
    base64Data = base64Data.replace('data:video/mp4;base64,', '')
    let contentType = 'video/mp4';  
    

    contentType = contentType || '';
    let sliceSize = 1024;
    let byteCharacters = atob(base64Data);
    let bytesLength = byteCharacters.length;
    let slicesCount = Math.ceil(bytesLength / sliceSize);
    let byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      let begin = sliceIndex * sliceSize;
      let end = Math.min(begin + sliceSize, bytesLength);

      let bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}


}
