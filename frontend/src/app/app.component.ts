import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

@Component({
  selector: 'app-root',
  imports:[CommonModule, FormsModule,DoctorComponent, PatientsComponent, AppointmentsComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  section: string = ''; // default section
}
