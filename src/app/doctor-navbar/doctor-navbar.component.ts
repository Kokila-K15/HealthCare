import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css']
})
export class DoctorNavbarComponent implements OnInit {

  constructor() { }

  doctor:any;
  ngOnInit(): void {
    this.doctor=sessionStorage.getItem('doctorName');
  }

}
