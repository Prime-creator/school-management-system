import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../manager.service';
import {Student} from '../student'
@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {

  constructor(private service:ManagerService) { }
  students:Student;
  ngOnInit(): void {
    this.service.getStudents().subscribe((data)=>this.students=data);
  }

}
