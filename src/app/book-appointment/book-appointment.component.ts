import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentDetails } from '../classes/appointment-details';
import { DoctorDetails } from '../classes/doctor-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  doctorDetails:any[]=[]; 
  appointmentDetails:any;
  private appDetails=new AppointmentDetails();
  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    var patientname=sessionStorage.getItem('userName');
    if(patientname==null)
    this.router.navigate(['']); 
    else{
    var x=sessionStorage.getItem('doctorId');
    var id = Number(x);
   // console.log(numberValue);
   this.healthCareService.viewDoctor(id).subscribe(data=>
    {
       this.doctorDetails=data;
       console.log(this.doctorDetails);
       console.log(sessionStorage.getItem('userName'));
    })}
  }

  form = new FormGroup({   
    age : new FormControl('' , Validators.required),  
    mobile : new FormControl('' , Validators.required), 
    date : new FormControl('' , Validators.required),   
});

  RegisterForm(){
    this.appDetails.age=(<HTMLInputElement>document.getElementById("age")).value;
    this.appDetails.mobileNum=(<HTMLInputElement>document.getElementById("mobile")).value;
    this.appDetails.date=(<HTMLInputElement>document.getElementById("date")).value;
    this.appDetails.patientName=sessionStorage.getItem('userName');
    this.appDetails.status="Waiting";
    this.appDetails.doctorName=this.doctorDetails[0].doctorName;
    this.healthCareService.bookAppointment(this.appDetails).subscribe(  
      response => {  
         this.appointmentDetails=response; 
          if(this.appointmentDetails!=null)  
          {  
            this.router.navigate(['/manageAppointment']);  
          }  
          else
          {``
            alert("Error in booking appointment");
          }
      },  
      error => {  
        alert("Error");
      }  
    );  
  }
 
}
