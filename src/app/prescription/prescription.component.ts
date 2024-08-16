import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  appDetails:any;
  haveData=0;
  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    var patientname=sessionStorage.getItem('userName');
    if(patientname==null)
    this.router.navigate(['']); 
    else{
    this.healthCareService.viewReport(patientname).subscribe(data=>
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

}
