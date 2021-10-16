import { Component, OnInit } from '@angular/core';
import { FileService } from "../service/file.service";
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../service/user.service';
import { ShutterstockService } from '../service/shutterstock.service';
import { PixabayService } from '../service/pixabay.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})

export class MultimediaPage implements OnInit {
  loader: any = [];
  filesCheck: any = [];
  control:boolean;
  controlSearch:boolean;
  controlViewContent:string = "view_free_content";
  audioHTML: any;
  audioNameAux: string;
  file:any;
  search:any;
  constructor(
    private fileService : FileService ,
    private translate: TranslateService,
    private user: UserService,
    private shutterstock:ShutterstockService,
    private pixabayService: PixabayService

  ){
    this.control = false ;
    this.controlSearch = false ;
    this.loadFiles();
  }
  ngOnInit() {}
  fileSelected(e:any){

    this.file = e.target;
    this.loader = []
    // validar cantidad de documentos
    if(this.file.files.length > 0){
      this.control = false ;
      this.controlSearch = false ;
      this.fileService.preview(this,e);
    }
    // Apagar audio
    if(this.audioHTML) this.audioStop()


  }
  deletePreview(i:any){
    console.log('aqui :' , i)
    
    this.messageConfirm({
      title : this.translate.instant('multimedia.delete_file') ,
      text : this.translate.instant('multimedia.question_1') 
    }, ()=>{

      this.loader.splice(i, 1);
      if(this.audioHTML) this.audioStop();
    })
  }
  savePreview(i:number){
  
    this.messageConfirm({
      title : this.translate.instant('multimedia.save_file') ,
      text : this.translate.instant('multimedia.question_2') 
    }, ()=>{
        let form = this.fileService.createForm(this.file.files[i]);
        form.append( 'name' , this.loader[i].name );
        form.append( 'email' , this.user.getUser().email );
    
        if(form){
          this.fileService.upload(form).subscribe(
            resp =>{
              this.loader.splice(i, 1);
    
              if(this.loader.length < 1) this.loadFiles(); 
            },
            error => {
              console.log(error);
            }
          );
        }
    
    })


  }

  savePreviewSearch(i:number){
    // actualizar nombre

    this.messageConfirm({
      title : this.translate.instant('multimedia.save_file') ,
      text : this.translate.instant('multimedia.question_2') 
    }, ()=>{
      let form = this.fileService.createFormToApi(this.loader[i])
      form['email'] = this.user.getUser().email ;
      if(form){
        this.fileService.uploadFromApi(form).subscribe(
          resp =>{
            this.loader.splice(i, 1);
          },
          error => {
            console.log(error);
          }
        );
      }
    
    })
  }

  saveBuy(file:any){
    // actualizar nombre
    let form = this.fileService.createFormToApi(file);
    form['email'] = this.user.getUser().email;

    if(form){
      console.log(form)
      this.fileService.uploadFromApi(form).subscribe(
        resp =>{ console.log(resp);  },
        error => {
          console.log(error);
        }
      );
    }

    
  }

  buyLicense(i){
    

    this.messageConfirm({
        title : this.translate.instant('multimedia.buy_file') ,
        text : this.translate.instant('multimedia.question_3') 
      }, ()=>{
  
        let type = this.loader[i].type.trim();
        let file = this.loader[i];

        if(type == 'image/jpeg' || type == 'image/png' )
          this.getLicenseImg( file );
        else if(type == 'audio/mpeg')
          this.getLicenseAudio(file);
        else
          this.getLicenseVideo(file);
      
    })

    this.loader.splice(i, 1);
  }
  getLicenseImg(data: any){
    this.shutterstock.getLicenseImg(data.id_file).subscribe(
      resp =>{
        if(!resp.url)
          data.code = 'https://picsum.photos/200/300?random=1'
        else
          data.dir = resp.url
        this.saveBuy(data)
      },
      error => console.log(error)
    )
  }
  getLicenseAudio(datos:any){
    this.shutterstock.getLicenseAudio(datos.id_file).subscribe(
      resp =>{ console.log(resp) },
      error => console.log(error)
    )
  }

  getLicenseVideo(datos:any){
    this.shutterstock.getLicenseVideo(datos.id_file).subscribe(
      resp =>{ console.log(resp) },
      error => console.log(error)
    )
  }


  loadFiles(){
    this.loader = [];
    this.search = "";

    this.fileService.get(this.user.getUser().email).subscribe(
      resp =>{
        if(resp.file){
          this.loader =  this.fileService.loadFile( resp.file);
           this.control = true ;
           this.controlSearch = false ;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  delete(i:number){
  
    this.messageConfirm({
      title : this.translate.instant('multimedia.delete_file') ,
      text : this.translate.instant('multimedia.question_1') 
    }, ()=>{

      this.fileService.delete({ id : this.loader[i].id}).subscribe(
        resp => {
          console.log(resp);
          this.loadFiles();
        },
        error =>{console.log(error);}
      )

    })

  }

  audioPlay(name , code ){

    this.audioNameAux = name;
    if(this.audioHTML){
      this.audioHTML.pause();
      this.audioHTML.currentTime = 0;
    }
    this.audioHTML = new Audio(code);
    this.audioHTML.play();

  }
  audioStop(){
    this.audioHTML.pause();
    this.audioHTML.currentTime = 0;
    this.audioNameAux = '';
  }

  btnSearchMedia(){
    this.control = false ;
    this.controlSearch = true ;
    this.loader = [];
  }

  btnSetViewContent(){
    if(this.controlViewContent == 'view_free_content' )
      this.controlViewContent = 'view_premium_content';
    else 
      this.controlViewContent = 'view_free_content';

    this.filterSearch();

  }
  filterSearch(){
    
    if(this.controlViewContent == 'view_free_content')
      this.filterSearchFree();
    else
      this.filterSearchPremium(); 
  }

  filterSearchFree(){
    this.loader = []
    this.loadPixabayImg(this.search , this.loadPixabayVideo(this.search))
  }

  filterSearchPremium(){
    this.loader = []
    this.loadShutterstockImg(this.search , this.loadShutterstockAudio(this.search , this.loadShutterstockVideo(this.search)  )  )
  }

  loadPixabayImg(search , callback){

    this.pixabayService.getImg(search).subscribe(
      resp =>{
        resp.type = 'img';
        this.loader = this.pixabayService.loadFile( resp).concat( this.loader );
        callback();
      },
      error => { console.log(error)}
    )
  }

  loadPixabayVideo(search){
    this.pixabayService.getVideo(search).subscribe(
      resp => {
        resp.type = 'video';
        this.loader = this.loader.concat( this.pixabayService.loadFile(resp))
      },
      error => { console.log(error);}
    )

  }

  loadShutterstockImg(search , callback){
    this.shutterstock.getImg(search).subscribe(
      resp =>{
        this.loader = this.shutterstock.loadFile( resp).concat( this.loader );
        callback();
      },
      error => { console.log(error)}
    )
  }

  loadShutterstockAudio(search , callback){
    this.shutterstock.getAudio(search).subscribe(
      resp =>{
        this.loader = this.loader.concat( this.shutterstock.loadFile(resp))
        callback();
      },
      error => { console.log(error)}
    )
  }
  loadShutterstockVideo(search){
    this.shutterstock.getVideo(search).subscribe(
      resp => {
        this.loader = this.loader.concat( this.shutterstock.loadFile(resp))
      },
      error => { console.log(error);}
    )

  }

  async messageConfirm( config:any , callback:Function ) {

    await Swal.fire({
      title: config.title,
      text: config.text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant("yes"),
      cancelButtonText: this.translate.instant("no"),
    }).then((result) => {
      if (result.isConfirmed) {
        callback()
      }
    })
  }

  modalImg(url:string){
    Swal.fire({
      imageUrl: url,
      imageAlt: 'A tall image',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }


  modalVideo(i:any){
    console.log(i)
    document.getElementById("video"+i ).requestFullscreen();
  }
}