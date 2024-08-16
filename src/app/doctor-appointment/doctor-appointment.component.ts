import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentDetails } from '../classes/appointment-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  appDetails:any;
  rejectDetails:any;
  private doctorAppDetails=new AppointmentDetails();
  haveData=0;
  appReject=0;
  appId=0;
  acceptDetails: any;
  constructor(private healthCareService:HealthCareService,private router:Router) { }
  ngOnInit(): void {
    var doctorname=sessionStorage.getItem('doctorName');
    if(doctorname==null)
    this.router.navigate(['']); 
    else{
    console.log(doctorname);
      this.healthCareService.viewDoctorAppDetails(doctorname).subscribe(data=>
        {
           this.appDetails=data;
           if(data==" ")
           {
               this.haveData=0;
           }
           else{
             this.haveData=this.haveData+1;
           }
        })}
  }
  reject(id:number){
    this.doctorAppDetails.status="Rejected";
    this.healthCareService.rejectAppDetails(id).subscribe(data=>
      {
         this.rejectDetails=data;
         //console.log(this.rejectDetails);
         this.router.navigate(['/doctorAppointment']);  
      })
  }
  display="none";
  openModal(id:number) {
    this.appId=id;
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
    this.router.navigate(['/doctorAppointment']); 
  }

  form = new FormGroup({   
    FromTime : new FormControl('' , Validators.required),  
    ToTime : new FormControl('' , Validators.required),   
});
  TimeForm(){
   this.doctorAppDetails.appointmentId=this.appId;
   this.doctorAppDetails.fromTime=(<HTMLInputElement>document.getElementById("FromTime")).value;
   this.doctorAppDetails.toTime=(<HTMLInputElement>document.getElementById("ToTime")).value;
   this.doctorAppDetails.status="Accepted";
    this.healthCareService.acceptAppDetails(this.doctorAppDetails).subscribe(data=>
      {
         this.acceptDetails=data;
         //console.log(this.acceptDetails);
      })
   }
}


