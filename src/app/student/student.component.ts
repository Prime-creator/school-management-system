import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ManagerService} from '../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service:ManagerService, private router: Router) { }

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
    let resp = this.service.verifyStudent(this.name,this.password);
    resp.subscribe((data)=>{
      if(data!=-1){
        this.router.navigate(['distributor',data]);
      }else{
        this.res=true;
        login.reset()  
      }
      this.flag=data});
    console.log(this.flag);
  }
}
