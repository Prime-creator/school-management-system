import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {ListerComponent} from './lister/lister.component'
import {StudentComponent} from './student/student.component';
import {DistributorComponent} from './distributor/distributor.component';
import {RegistrationComponent} from './registration/registration.component';
import {UpdateComponent} from './update/update.component';
import { HaveNotComponent } from './have-not/have-not.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin", component: AdminComponent },
  { path: "lister", component:ListerComponent },
  { path: "student", component:StudentComponent },
  { path: "distributor/:id", component:DistributorComponent },
  { path: "registration/:id", component:RegistrationComponent },
  { path: "update/:id", component:UpdateComponent },
  { path: "haveNot", component:HaveNotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
