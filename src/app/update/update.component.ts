import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ManagerService} from '../manager.service';
import {Student} from '../student';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @ViewChild('updateForm', { static: false }) updateForm: NgForm;
  constructor(private service:ManagerService,private route: ActivatedRoute, private router: Router) { }
  message:any;
  student:Student;
  id:number;
  ngOnInit(): void {
    this.student = new Student();
    this.id=this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data)=>this.student=data);
  }
  public update(form :NgForm){
    console.log("update method called");
    console.log(this.student);
    this.service.updateStudent(this.student).subscribe((data)=>{this.message=data});
    this.student=new Student();
    form.resetForm();
  }
}
