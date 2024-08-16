import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportDetails } from '../classes/report-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css']
})
export class ManageAppointmentsComponent implements OnInit {

  appDetails:any;
  haveData=0;
  reportDetails:any;
  constructor(private healthCareService:HealthCareService,private router:Router) { }
  appReject=0;
  ngOnInit(): void {
    var patientname=sessionStorage.getItem('userName');
    if(patientname==null)
    this.router.navigate(['']); 
    else{
      this.healthCareService.viewAppDetails(patientname).subscribe(data=>
        {
           this.appDetails=data;
           console.log(this.appDetails);
           if(data==null)
           {
               this.haveData=0;
           }
           else{
             this.haveData=this.haveData+1;
           }
        })
  }}
}
