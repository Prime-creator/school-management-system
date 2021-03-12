import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {ManagerService} from './manager.service';
import { ListerComponent } from './lister/lister.component';
import { StudentComponent } from './student/student.component';
import { DistributorComponent } from './distributor/distributor.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';
import { HaveNotComponent } from './have-not/have-not.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ListerComponent,
    StudentComponent,
    DistributorComponent,
    RegistrationComponent,
    UpdateComponent,
    HaveNotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
