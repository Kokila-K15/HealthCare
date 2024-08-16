import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {

  vReport:any;
  appDetails:any;
  haveData=0;
  display="none";
  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    var patientname=sessionStorage.getItem('userName');
    if(patientname==null)
    this.router.navigate(['']); 
    else{
      this.healthCareService.viewReportDetails(patientname).subscribe(data=>
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
        })}
  }
  
  openModal(id:number) {
    this.healthCareService.getDetails(id).subscribe(data=>
      {
         this.vReport=data;
        // console.log(this.vReport[0].hospital);
         if(this.vReport[0].hospital==null)
         alert("Your report is not yet completed by the doctor");
         else
          this.display = "block";
      })
  }
  onCloseHandled() {
    this.display = "none";
  }
}
