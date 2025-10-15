import { Routes } from '@angular/router';
import { DoctorComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

export const routes: Routes = [
    { path: 'doctors', component: DoctorComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'appointments', component: AppointmentsComponent },
    { path: '', redirectTo: 'doctors', pathMatch: 'full' },
  ];
