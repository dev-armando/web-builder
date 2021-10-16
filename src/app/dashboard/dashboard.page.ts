import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
interface ConnectionResp {
  code:Number
  msg:String
  connections:object[]
}

interface Connection {
  user:Object
  ip:String
  country:String
  city:String
  date:Date
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(
    private loginService:LoginService,
    public translate:TranslateService,
    public userService:UserService
) { }

ngOnInit() {

        
 
}

ionViewWillEnter() {

        
  this.getConnections()
}
connections: Connection[] = []
getConnections(){
  this.loginService.connections().subscribe((connections)=>{
   
    
          this.connections = <Connection[]>connections    
   
  })
}

}
