import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from './student';
import {StudentLogin} from './student-login';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  public verifyAdmin(name, password): Observable<boolean> {
    return this.http.get<boolean>("http://localhost:8100/admin/"+name+"/"+password);
  }

  public getStudents(): Observable<Student> {
    return this.http.get<Student>("http://localhost:8100/students");
  }

  public verifyStudent(name, password):Observable<any>{
    return this.http.get<any>("http://localhost:8100/login/"+name+"/"+password);
  }

  public register(student, id){
    return this.http.post("http://localhost:8100/adderStudent"+"/"+id,student, { responseType: 'text' as 'json' });
  }
  public getById(id):Observable<Student>{
    return this.http.get<Student>("http://localhost:8100/student/"+id);
  }
  public updateStudent(student){
    return this.http.put<any>("http://localhost:8100/updateStudent/",student, { responseType: 'text' as 'json' });
  }

  public addLoginStudent(studentLogin):Observable<any>{
    return this.http.post("http://localhost:8100/addLogin"+"/",studentLogin, { responseType: 'text' as 'json' });
  }
}
