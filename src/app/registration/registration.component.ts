import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ManagerService} from '../manager.service';
import {Student} from '../student';
import { ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('registerForm', { static: false }) registerForm: NgForm;
  constructor(private service:ManagerService,private route: ActivatedRoute, private router: Router) { }
  message:any;
  student:Student=new Student();
  id:number;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }
  public registerNow(form :NgForm){
    this.student=form.value;
    this.service.register(this.student,this.id).subscribe((data)=>this.message=data);
    this.student=new Student();
    form.resetForm();
  }
}
