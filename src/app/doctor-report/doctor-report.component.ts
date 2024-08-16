import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportDetails } from '../classes/report-details';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-doctor-report',
  templateUrl: './doctor-report.component.html',
  styleUrls: ['./doctor-report.component.css']
})
export class DoctorReportComponent implements OnInit {
  deleteMessage: boolean=false;

  constructor(private healthCareService:HealthCareService,private router:Router) { }
  reportDetails:any;
  rDetails:any;
  haveData=0;
  display="none";
  private reportInfo=new ReportDetails();
  rInfo:any;
  ngOnInit(): void {
    var d_name=sessionStorage.getItem('doctorName');
    if(d_name==null)
    this.router.navigate(['']); 
    //console.log(d_name);
    else{
    this.healthCareService.viewReports(d_name).subscribe(data=>
      {
         this.reportDetails=data;
         //console.log(this.reportDetails);
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
         this.rDetails=data;
         console.log(this.rDetails);
      })
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  form = new FormGroup({   
    hname : new FormControl('' , Validators.required), 
    revisit: new FormControl('' , Validators.required),
    revisitDate: new FormControl('' , Validators.required),
    reason:new FormControl('' , Validators.required),  
    progress:new FormControl('' , Validators.required),  
    
});
ReportForm(){
   this.reportInfo.reportId=this.rDetails[0].reportId;
   this.reportInfo.hospital=(<HTMLInputElement>document.getElementById("hname")).value;
   this.reportInfo.progress=(<HTMLInputElement>document.getElementById("progress")).value;
   this.reportInfo.reason=(<HTMLInputElement>document.getElementById("reason")).value;
   this.reportInfo.revisit=(<HTMLInputElement>document.getElementById("revisit")).value;
   this.reportInfo.revisitDate=(<HTMLInputElement>document.getElementById("revisitDate")).value;
   this.reportInfo.addCount="0";
   this.healthCareService.saveReportDetails(this.reportInfo).subscribe(data=>
    {
       this.rInfo=data;
       console.log(this.rInfo);
    })
}
deleteReport(reportId: number) {  
  var d_name=sessionStorage.getItem('doctorName');
  this.healthCareService.deleteReport(reportId).subscribe(data => {  
       // console.log(data);  
        this.deleteMessage=true;  
        this.healthCareService.viewReports(d_name).subscribe(data=>
          {
             this.reportDetails=data;
            // console.log(this.reportDetails);
             if(data==null)
             {
                 this.haveData=0;
             }
             else{
               this.haveData=this.haveData+1;
             }
          })
  },  
    ( error: any) => console.log(error));  
}  
}
