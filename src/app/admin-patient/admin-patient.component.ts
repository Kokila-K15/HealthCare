import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css']
})
export class AdminPatientComponent implements OnInit {

  appDetails: any;
  details:any;
  haveData=0;
  constructor(private healthCareService:HealthCareService,private router:Router) { }
  ngOnInit(): void {
    var email=sessionStorage.getItem('adminEmail');
    if(email==null)
    this.router.navigate(['']); 
    else{
      this.healthCareService.viewpatientDeatils().subscribe(data=>
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

  deleteUser(id:number){
    this.healthCareService.deletePatientDetails(id).subscribe(data=>
      {
        this.details=data;
        alert("Data is deleted successfully");
        this.healthCareService.viewpatientDeatils().subscribe(data=>
          {
             this.appDetails=data;
             if(data==" ")
             {
                 this.haveData=0;
             }
             else{
               this.haveData=this.haveData+1;
             }
          })
      })
  }
}
