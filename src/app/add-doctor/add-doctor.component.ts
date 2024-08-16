import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DoctorDetails } from '../classes/doctor-details';
import { HealthCareService } from '../services/health-care.service';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  display = "none";
  doctorDetails:any[]=[];
  haveData=0;
  private user = new DoctorDetails();  
  private doctortDetail = new DoctorDetails();  

  constructor(private healthCareService:HealthCareService,private router:Router) { }
  
  ngOnInit(): void {
    this.getData(this.user);  
  }

  
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
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  form = new FormGroup({   
    email : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required),  
    doctorName: new FormControl('' , Validators.required),  
    specialization:new FormControl('' , Validators.required),  
    qualification:new FormControl('' , Validators.required),  
    mobile:new FormControl('' , Validators.required),  
    
});

    

LoginForm(){
  this.doctortDetail.doctorName=(<HTMLInputElement>document.getElementById("doctorName")).value
  this.doctortDetail.email=(<HTMLInputElement>document.getElementById("email")).value;
  this.doctortDetail.password=(<HTMLInputElement>document.getElementById("password")).value
  this.doctortDetail.qualification=(<HTMLInputElement>document.getElementById("qualification")).value
  this.doctortDetail.specialization=(<HTMLInputElement>document.getElementById("specialization")).value
  this.doctortDetail.mobile=(<HTMLInputElement>document.getElementById("mobile")).value;
    this.healthCareService.saveDoctor(this.doctortDetail).subscribe(  
      response => {  
          let result = response;  
          console.log(result);  
          if(result > 0 )  
          { 
            alert("Successfully added");
          } 
      },  
      error => {  
       alert("error while saving data in the DB");  
      }  
    );  
  }
}