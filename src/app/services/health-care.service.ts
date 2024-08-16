import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PatientDetails } from '../classes/patient-details';
import { Observable } from 'rxjs';
import { DoctorDetails } from '../classes/doctor-details';
import { AppointmentDetails } from '../classes/appointment-details';
import { ReportDetails } from '../classes/report-details';
import { MedicineDetails } from '../classes/medicine-details';

@Injectable({
  providedIn: 'root'
})
export class HealthCareService {

  private  baseUrl = "http://localhost:8080/healthCare/";
  
  constructor(private http:HttpClient, private router:Router) { }
  
  savePatientDetails(patientDetail : PatientDetails) : Observable<any>  
  {  
      let url = this.baseUrl + "registerPatient";  
      return this.http.post(url,patientDetail);    
  }  
  
  login(patientDetail: PatientDetails):Observable<any>
  {
    let url=this.baseUrl+"loginPatient";
    return this.http.post(url,patientDetail);
  }

  saveDoctor(doctortDetail:DoctorDetails):Observable<any>
  {
    let url = this.baseUrl + "saveDoctor";  
    return this.http.post(url,doctortDetail);  
  }

  viewDoctor(id:number):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/viewDoctor/${id}`, { responseType: 'json' });  
  }

  viewDoctors(doctorDetail:DoctorDetails):Observable<any>
  {
    let url=this.baseUrl+"viewPDoctors";
    return this.http.post(url,doctorDetail);
  }

  bookAppointment(appDetails:AppointmentDetails)
  {
    let url=this.baseUrl+"bookAppointment";
    return this.http.post(url,appDetails);
  }

  viewAppDetails(patientName:String|null)
  {
    let url=this.baseUrl+"viewAppDetails";
    return this.http.post(url,patientName);
  }

  doctorLogin(doctorDetails: DoctorDetails):Observable<any>
  {
    let url=this.baseUrl+"loginDoctor";
    return this.http.post(url,doctorDetails);
  }

  viewDoctorAppDetails(doctorName:String|null)
  {
     let url=this.baseUrl+"viewDoctorAppDetails";
     return this.http.post(url,doctorName);
  }

  rejectAppDetails(id:number){
    let url=this.baseUrl+"rejectAppDetails";
    return this.http.post(url,id);
  }

  acceptAppDetails(appDetails:AppointmentDetails){
    let url=this.baseUrl+"acceptAppDetails";
    return this.http.post(url,appDetails);
  }

  requestReport(id:number){
    let url=this.baseUrl+"requestReport";
    return this.http.post(url,id);
  }

  viewAppHistory(name:String|null)
  {
    let url=this.baseUrl+"viewAppHistory";
    return this.http.post(url,name);
  }

  addReportDetails(reportDetails:ReportDetails){
    let url=this.baseUrl+"addReportDetails";
    return this.http.post(url,reportDetails);
  }

  viewReports(doctorName:String|null):Observable<any>{
    let url=this.baseUrl+"viewReports";
    return this.http.post(url,doctorName);
  }

  getDetails(id:number){
    let url=this.baseUrl+"getDetails";
    return this.http.post(url,id);
  }

  saveReportDetails(rDetails:ReportDetails){
    let url=this.baseUrl+"saveReportDetails";
    return this.http.post(url,rDetails);
  }

  viewReportDetails(name:String|null){
    let url=this.baseUrl+"viewReportDetails";
    return this.http.post(url,name);
  }
  
  appMedicineDetails(d_name:String|null){
    let url=this.baseUrl+"appMedicineDetails";
    return this.http.post(url,d_name);
  }

  fillMedicineDetails(medicineDetails:MedicineDetails){
    let url=this.baseUrl+"fillMedicineDetails";
    return this.http.post(url,medicineDetails);
  }

  deleteReport(reportId:number|null):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/deleteReport/${reportId}`, { responseType: 'text' });
  }

  viewReport(name:String|null){
    let url=this.baseUrl+"viewReport";
    return this.http.post(url,name);
  }

  getUserDetails(email:String|null){
    let url=this.baseUrl+"getUserDetails";
    return this.http.post(url,email);
  }

  saveEditDetails(patientDetails:PatientDetails){
    let url=this.baseUrl+"saveEditDetails";
    return this.http.post(url,patientDetails);
  }

  viewpatientDeatils(){
    let url=this.baseUrl+"viewpatientDeatils";
    return this.http.get(url);
  }

  viewMedicineDetails(){
    let url=this.baseUrl+"viewMedicineDetails";
    return this.http.get(url);
  }

  viewDetailsReport(){
    let url=this.baseUrl+"viewDetailsReport";
    return this.http.get(url);
  }

  deletePatientDetails(id:number){
    return this.http.delete(`${this.baseUrl}/deletePatientDetails/${id}`, { responseType: 'text' });
  }

  deleteMedicineDetails(id:number){
    return this.http.delete(`${this.baseUrl}/deleteMedicineDetails/${id}`, { responseType: 'text' });
  }

  deleteReportDetails(id:number){
    return this.http.delete(`${this.baseUrl}/deleteReportDetails/${id}`, { responseType: 'text' });
  }
}
