import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorDetails } from '../classes/doctor-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  private doctorDetail=new DoctorDetails();
  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
  }

  d_details:any[]=[];
  form = new FormGroup({   
    email : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required),   
});
LoginForm(){
  this.doctorDetail.email=(<HTMLInputElement>document.getElementById("email")).value;
  this.doctorDetail.password=(<HTMLInputElement>document.getElementById("password")).value;
  let mail= (<HTMLInputElement>document.getElementById("email")).value;
  sessionStorage.setItem('userEmail', mail);
  this.healthCareService.doctorLogin(this.doctorDetail).subscribe(  
    response => {  
       this.d_details=response; 
        if(this.d_details!=null)  
        {  
          sessionStorage.setItem('doctorName',this.d_details[0].doctorName);
          this.router.navigate(['/doctorHome']);  
        }  
        if(this.d_details==null)
        {
          alert("Please register before login or check your login credentials");
        }
    },  
    error => {  
      alert("Error");
    }  
  );  
  }

}
