import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ManagerService} from '../manager.service';
import { Router } from '@angular/router';
import {StudentLogin} from '../student-login';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-have-not',
  templateUrl: './have-not.component.html',
  styleUrls: ['./have-not.component.css']
})
export class HaveNotComponent implements OnInit {
  @ViewChild('login', { static: false }) login: NgForm;
  confirmPassword = "";
  flag = false;
  id:number;
  studentLogin:StudentLogin = new StudentLogin();
  constructor(private service:ManagerService, private router: Router) { }

  ngOnInit(): void {
  }
  public completeLogin(form :NgForm){
    this.studentLogin = form.value;
    console.log(this.studentLogin.name+" "+this.studentLogin.password+" "+this.confirmPassword);
    if(this.studentLogin.password != this.confirmPassword){
      this.flag = true;
    }else{
      console.log("hello ther");
      this.service.addLoginStudent(this.studentLogin).subscribe((data)=>{
        console.log("hello");
        this.id = data;
        this.router.navigate(['registration',data]);
      })
    }
  }
}
