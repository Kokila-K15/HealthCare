import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientSignUpComponent } from './patient-sign-up/patient-sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorSignInComponent } from './doctor-sign-in/doctor-sign-in.component';
import { PatientNavbarComponent } from './patient-navbar/patient-navbar.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PViewDoctorComponent } from './p-view-doctor/p-view-doctor.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { DoctorNavbarComponent } from './doctor-navbar/doctor-navbar.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { DoctorReportComponent } from './doctor-report/doctor-report.component';
import { PatientReportComponent } from './patient-report/patient-report.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { DoctionPrescriptionComponent } from './doction-prescription/doction-prescription.component';
import { DoctorLogoutComponent } from './doctor-logout/doctor-logout.component';
import { PatientLogoutComponent } from './patient-logout/patient-logout.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminMedicineComponent } from './admin-medicine/admin-medicine.component';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientLoginComponent,
    PatientSignUpComponent,
    DoctorLoginComponent,
    AddDoctorComponent,
    PatientDashboardComponent,
    DoctorSignInComponent,
    PatientNavbarComponent,
    ViewDoctorComponent,
    AdminNavbarComponent,
    AdminHomeComponent,
    PViewDoctorComponent,
    BookAppointmentComponent,
    ManageAppointmentsComponent,
    DoctorHomeComponent,
    DoctorNavbarComponent,
    DoctorAppointmentComponent,
    AppointmentHistoryComponent,
    DoctorReportComponent,
    PatientReportComponent,
    PrescriptionComponent,
    DoctionPrescriptionComponent,
    DoctorLogoutComponent,
    PatientLogoutComponent,
    EditProfileComponent,
    AdminReportComponent,
    AdminMedicineComponent,
    AdminPatientComponent,
    AdminLogoutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    HttpClientModule,
    RouterModule.forRoot([  
      {  
        path : '',  
        component : HomeComponent   
      },  
      {
        path : 'patientSignUp',
        component : PatientSignUpComponent
      },
      {
        path : 'patientLogin',
        component : PatientLoginComponent
      },
      {
        path : 'addDoctor',
        component : AddDoctorComponent
      },
      {
        path : 'adminHome',
        component : AdminHomeComponent
      },
      {
        path : 'patientHome',
        component : PatientDashboardComponent
      },
      {
        path : 'ViewDoctor',
        component : ViewDoctorComponent
      },
      {
        path : 'bookAppointment',
        component : BookAppointmentComponent
      },
      {
        path : 'manageAppointment',
        component : ManageAppointmentsComponent
      },
      { 
        path : 'doctorLogin',
        component : DoctorLoginComponent
      },
      {
        path : 'doctorHome',
        component : DoctorHomeComponent
      },
      {
        path : 'doctorAppointment',
        component : DoctorAppointmentComponent
      },
      {
        path : 'history',
        component : AppointmentHistoryComponent
      },
      {
        path : 'doctor-report',
        component : DoctorReportComponent
      },
      {
        path : 'patient-report',
        component : PatientReportComponent
      },
      {
        path : 'patient-medicine',
        component : PrescriptionComponent
      },
      {
        path : 'doctor-medicine',
        component : DoctionPrescriptionComponent
      },
      {
        path : 'edituser',
        component : EditProfileComponent
      },
      {
        path : 'admin-patient',
        component : AdminPatientComponent
      },
      {
        path : 'admin-medicine',
        component : AdminMedicineComponent
      },
      {
        path : 'admin-report',
        component : AdminReportComponent
      },
      {
        path : 'admin-logout',
        component : AdminLogoutComponent
      },
      {
        path : 'admin-home',
        component : AdminHomeComponent
      }
    ]),
    NgbModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
