import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientDetails } from '../classes/patient-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userDetails:any;
  private patientDetails=new PatientDetails();
  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    var email=sessionStorage.getItem('userEmail');
    this.healthCareService.getUserDetails(email).subscribe(  
      response => {  
         this.userDetails=response; 
      },  
      error => {  
        alert("Error");
      }  
    );  
  }

  form = new FormGroup({   
    mobile : new FormControl('' , Validators.required),  
    name : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required),   
});
  EditForm(){
    this.patientDetails.email=(<HTMLInputElement>document.getElementById("email")).value;
    this.patientDetails.mobile=(<HTMLInputElement>document.getElementById("mobile")).value;
    this.patientDetails.userName=(<HTMLInputElement>document.getElementById("name")).value;
    this.patientDetails.password=(<HTMLInputElement>document.getElementById("password")).value;
    this.healthCareService.saveEditDetails(this.patientDetails).subscribe(  
      response => {  
         this.userDetails=response; 
         if(this.userDetails==1)
         alert("successfully uploaded");
         else
         alert("error");
      },  
      error => {  
        alert("Error");
      }  
    );  
  }

}
