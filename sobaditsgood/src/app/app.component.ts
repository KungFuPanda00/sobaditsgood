import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { APIServiceService } from './apiservice.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  search : String ="";
  title = 'So Bad Its Good';
  session:boolean = false
  currentUser:string |undefined;
  pic?:Observable<any>
  
  constructor(private api:APIServiceService, private router:Router){
    api.inInSession().subscribe(data=>{
      this.session = JSON.parse(JSON.stringify(data)).isInSession
      if(this.session == true){
        this.api.getCurrentUserInfo().subscribe(data=>{
          this.currentUser = JSON.parse(JSON.stringify(data))[0].username
          this.pic=JSON.parse(JSON.stringify(data))[0].profilepic
        })
      }
    })
  }

  Logout(){
    this.api.logout().subscribe(data=>{
      this.router.navigate(['/login'])
      this.session = false
    })
  }

  Search()
  {
    this.router.navigate([`/search/${this.search}`]);
  }
}
