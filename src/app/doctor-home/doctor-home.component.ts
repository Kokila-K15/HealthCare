import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCareService } from '../services/health-care.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

  constructor(private healthcare:HealthCareService,private router:Router) { }

  ngOnInit(): void {
    var doctorname=sessionStorage.getItem('doctorName');
    if(doctorname==null)
    this.router.navigate(['']); 
    else{

    }
  }

}
