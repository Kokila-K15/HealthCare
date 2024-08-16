import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientDetails } from '../classes/patient-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  private patientDetail=new PatientDetails();
  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
  }

  p_details:any[]=[];
  form = new FormGroup({   
    email : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required),   
});
LoginForm(){
  this.patientDetail.email=(<HTMLInputElement>document.getElementById("email")).value;
  this.patientDetail.password=(<HTMLInputElement>document.getElementById("password")).value;
  if(this.patientDetail.email=="admin@gmail.com"&&this.patientDetail.password=="admin"){
  let email=(<HTMLInputElement>document.getElementById('email')).value;
  sessionStorage.setItem('adminEmail',email);
  this.router.navigate(['/adminHome']);  
  }
  else{
  let mail= (<HTMLInputElement>document.getElementById("email")).value;
  sessionStorage.setItem('userEmail', mail);
  this.healthCareService.login(this.patientDetail).subscribe(  
    response => {  
       this.p_details=response; 
        if(this.p_details!=null)  
        {  
          console.log(this.p_details);
          sessionStorage.setItem('userName',this.p_details[0].userName);
          this.router.navigate(['/patientHome']);  
        }  
        if(this.p_details==null)
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

}
