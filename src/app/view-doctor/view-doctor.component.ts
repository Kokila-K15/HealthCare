import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorDetails } from '../classes/doctor-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

  doctorDetails:any[]=[];
  haveData=0;
  private user = new DoctorDetails();  
  viewDetails:any[]=[];
  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    var patientname=sessionStorage.getItem('userName');
    if(patientname==null)
    this.router.navigate(['']); 
    else{
    this.getData(this.user); 
    } 
  }

  form = new FormGroup({  
    name : new FormControl(),  
    spec : new FormControl()  
  });  
  
  
  searchForm()  
  {  
        this.user.doctorName = (<HTMLInputElement>document.getElementById("name")).value; 
        this.user.specialization =  (<HTMLInputElement>document.getElementById("spec")).value; 
        this.getData(this.user);  
  }  

  getData(user: DoctorDetails){
    this.healthCareService.viewDoctors(user).subscribe(data=>
      {
         this.doctorDetails=data;
         console.log(this.doctorDetails);
         if(data==" ")
         {
             this.haveData=0;
         }
         else{
           this.haveData=this.haveData+1;
         }
      })
  }
  viewDoctor(id:number)
  {
   
     sessionStorage.setItem('doctorId',id.toString());
     this.router.navigate(['/bookAppointment']);  
  }
}
