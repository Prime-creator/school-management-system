import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ManagerService} from '../manager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private service:ManagerService, private router: Router) {}
  ngOnInit(): void {
  }
  name = '';
  password='';
  flag:any;
  yo:any;
  res=false;
  public completeLogin(login :NgForm){ 
    console.log(this.name);
    console.log(this.password);
    let resp = this.service.verifyAdmin(this.name,this.password);
    resp.subscribe((data)=>{
      console.log("lol");
      if(data==true){
        console.log("yo its true");
        this.router.navigate(['lister']);
      }else{
        this.res = true;
        login.reset()  
      }
      this.flag=data});
    console.log(this.flag);
  }
}


// this.http.get("http://localhost:8100/admin/"+this.name+"/"+this.password).subscribe((data)=>{
    //   console.log("helllllllooo "+data);
    //   if(data==true){
    //     this.flag=true;
    //   }else{
    //     this.flag=false;
    //   }
    // });
