import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-admin-medicine',
  templateUrl: './admin-medicine.component.html',
  styleUrls: ['./admin-medicine.component.css']
})
export class AdminMedicineComponent implements OnInit {

  appDetails: any;
  details:any;
  haveData=0;
  constructor(private healthCareService:HealthCareService,private router:Router) { }
  ngOnInit(): void {
    var email=sessionStorage.getItem('adminEmail');
    if(email==null)
    this.router.navigate(['']); 
    else{
      this.healthCareService.viewMedicineDetails().subscribe(data=>
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

  deleteMedicine(id:number){
    this.healthCareService.deleteMedicineDetails(id).subscribe(data=>
      {
        this.details=data;
        alert("Data is deleted successfully");
        this.healthCareService.viewMedicineDetails().subscribe(data=>
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
