import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-doctor-logout',
  templateUrl: './doctor-logout.component.html',
  styleUrls: ['./doctor-logout.component.css']
})
export class DoctorLogoutComponent implements OnInit {

  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('doctorName');
    this.router.navigate([' ']); 
  }

}
