import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicineDetails } from '../classes/medicine-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-doction-prescription',
  templateUrl: './doction-prescription.component.html',
  styleUrls: ['./doction-prescription.component.css']
})
export class DoctionPrescriptionComponent implements OnInit {

  appDetails:any;
  display: string="none";
  rDetails: any;
  private medicineDetails=new MedicineDetails();
  constructor(private healthCareService:HealthCareService,private router:Router) { }
  haveData=0;

  ngOnInit(): void {
    var d_name=sessionStorage.getItem('doctorName');
    if(d_name==null)
    this.router.navigate(['']); 
    else{
    this.healthCareService.appMedicineDetails(d_name).subscribe(  
      response => {  
         this.appDetails=response; 
         if(this.appDetails==" ")
         this.haveData=0;
         else
         this.haveData=1;
      },  
      error => {  
        alert("Error");
      }  
    );} 
  }
  openModal(id:number) {
    this.healthCareService.requestReport(id).subscribe(data=>
      {
         this.rDetails=data;
         //console.log(this.rDetails);
      })
    this.display="block";
  }
  onCloseHandled() {
    this.display ="none";
  }
  form = new FormGroup({   
    hname : new FormControl('' , Validators.required), 
    medicine : new FormControl('' , Validators.required), 
});
MedicineForm(){
   this.medicineDetails.appointmentId=this.rDetails[0].appointmentId;
   this.medicineDetails.doctorName=this.rDetails[0].doctorName;
   this.medicineDetails.patientName=this.rDetails[0].patientName;
   this.medicineDetails.date=this.rDetails[0].date;
   this.medicineDetails.age=this.rDetails[0].age;
   this.medicineDetails.hospital=(<HTMLInputElement>document.getElementById("hname")).value;
   this.medicineDetails.medicine=(<HTMLInputElement>document.getElementById("medicine")).value;
   this.medicineDetails.addCount="0";
   this.medicineDetails.viewCount="1";
  // console.log(this.medicineDetails);
   this.healthCareService.fillMedicineDetails(this.medicineDetails).subscribe(  
    response => {  
       this.appDetails=response; 
      // console.log(this.appDetails);
       if(this.appDetails==" ")
       this.haveData=0;
       else
       this.haveData=1;
    },  
    error => {  
      alert("Error");
    }  
  ); 
}
}
