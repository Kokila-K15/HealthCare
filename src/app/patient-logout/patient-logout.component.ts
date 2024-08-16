import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-patient-logout',
  templateUrl: './patient-logout.component.html',
  styleUrls: ['./patient-logout.component.css']
})
export class PatientLogoutComponent implements OnInit {

  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('userName');
    this.router.navigate([' ']); 
  }

}
