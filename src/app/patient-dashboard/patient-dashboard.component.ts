import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  constructor(private healthcare:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    var patientname=sessionStorage.getItem('userName');
    if(patientname==null)
    this.router.navigate(['']); 
    else{
    }
  }

}
