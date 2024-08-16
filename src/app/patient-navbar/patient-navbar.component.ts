import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-patient-navbar',
  templateUrl: './patient-navbar.component.html',
  styleUrls: ['./patient-navbar.component.css']
})
export class PatientNavbarComponent implements OnInit {

  constructor(private care:HealthCareService,private router:Router) { }
  username:any;
  ngOnInit(): void {
   this.username=sessionStorage.getItem('userName');
  }

}
