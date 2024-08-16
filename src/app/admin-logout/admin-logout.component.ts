import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(private healthCareService:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('adminEmail');
    this.router.navigate([' ']); 
  }

}
