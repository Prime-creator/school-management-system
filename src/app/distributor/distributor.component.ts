import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import {Student} from '../student';
import {ManagerService} from '../manager.service';
@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
  //http://localhost:4200/distributor/34328
  id:number;
  flag:boolean;
  student:Student = new Student();
  constructor(private route: ActivatedRoute, private router: Router,private service:ManagerService) { }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data)=>{
      if(data==null){
        this.flag = true;
      }else{
        this.flag = false;
      }
      this.student=data});
  }
  
  register(){
    this.router.navigate(['registration',this.id]);
  }

  update(){
    this.router.navigate(['update',this.id]);
  }
}
