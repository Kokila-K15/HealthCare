import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientDetails } from '../classes/patient-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-patient-sign-up',
  templateUrl: './patient-sign-up.component.html',
  styleUrls: ['./patient-sign-up.component.css']
})
export class PatientSignUpComponent implements OnInit {
  private user=new PatientDetails();

  constructor(private healthCareService : HealthCareService, private router : Router) { }
  

  ngOnInit(): void {
  }

  form = new FormGroup({  
    name : new FormControl('' , Validators.required),  
    email : new FormControl('' , Validators.required),  
    mobile : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required),  
    confirmPassword : new FormControl('' , Validators.required),    
});

UserForm()  
  {  
    let pass=(<HTMLInputElement>document.getElementById("password")).value;
    let c_pass=(<HTMLInputElement>document.getElementById("cpassword")).value;
    if(pass==c_pass){
      this.user.userName=(<HTMLInputElement>document.getElementById("username")).value;
      this.user.email=(<HTMLInputElement>document.getElementById("email")).value;
      this.user.mobile=(<HTMLInputElement>document.getElementById("mobile")).value;
      this.user.password=(<HTMLInputElement>document.getElementById("password")).value;
      this.healthCareService.savePatientDetails(this.user).subscribe(  
        response => {  
            let result = response; 
            if(result > 0)  
            {  
              this.router.navigate(['/patientLogin']);  
            }  
            else  
            {  
                alert("error occur while registring User. please try after sometime.")  
            }  
        },  
        error => {  
          alert("Your email has already regsiterd. please login")  
        }  
      );  
        
        
   }  
   else  
   {  
      alert("Password and confirm password not match.");  
   }  
 }   


}
