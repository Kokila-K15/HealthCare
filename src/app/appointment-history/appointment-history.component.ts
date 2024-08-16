import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportDetails } from '../classes/report-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {

  appDetails:any;
  haveData=0;
  reportDetails:any;
  addDetails: any;
  private rDetails=new ReportDetails();
  constructor(private healthCareService:HealthCareService,private router:Router) { }
  appReject=0;

  ngOnInit(): void {
    var patientname=sessionStorage.getItem('userName');
    if(patientname==null)
    this.router.navigate(['']); 
    else{
    this.healthCareService.viewAppHistory(patientname).subscribe(data=>
      {
         this.appDetails=data;
         //console.log(this.appDetails[0]);
         if(data==null)
         {
             this.haveData=0;
         }
         else{
           this.haveData=this.haveData+1;
         }
      })}
  }
  report(id:number){
    this.healthCareService.requestReport(id).subscribe(data=>
    {
      this.reportDetails=data;
      //console.log(this.reportDetails);
      this.rDetails.appointmentId=this.reportDetails[0].appointmentId;
      this.rDetails.doctorName=this.reportDetails[0].doctorName;
      this.rDetails.patientName=this.reportDetails[0].patientName;
      this.rDetails.age=this.reportDetails[0].age;
      this.rDetails.date=this.reportDetails[0].date;
      this.rDetails.addCount="1";
      this.rDetails.viewCount="1";
      this.healthCareService.addReportDetails(this.rDetails).subscribe(data=>
        {
          this.addDetails=data;
          //console.log(data);
          if(data==0)
          alert("Your request have already submitted");
        })
    },
  error => {  
    alert("Error");
  } ); 
 }
}
