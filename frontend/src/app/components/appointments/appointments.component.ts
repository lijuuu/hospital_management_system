import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../appointment.service';
import { DoctorService } from '../../Doctor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  imports:[CommonModule,FormsModule],
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];
  appointment: any = {};
  isEdit = false;
  doctors: any[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    this.getAppointments();
    this.getDoctors();
  }

  getAppointments() {
    this.appointmentService.getAll().subscribe(data => this.appointments = data);
  }

  getDoctors() {
    this.doctorService.getAll().subscribe(data => this.doctors = data);
  }

  getDoctorName(id: string): string {
    const doc = this.doctors.find(d => d._id === id);
    return doc ? doc.name : 'Unknown';
  }

  onSubmit() {
    if (this.isEdit) {
      this.appointmentService.update(this.appointment._id, this.appointment).subscribe(() => {
        this.resetForm();
        this.getAppointments();
      });
    } else {
      this.appointmentService.add(this.appointment).subscribe(() => {
        this.resetForm();
        this.getAppointments();
      });
    }
  }

  editAppointment(app: any) {
    this.appointment = { ...app };
    this.isEdit = true;
  }

  deleteAppointment(id: string) {
    this.appointmentService.delete(id).subscribe(() => this.getAppointments());
  }

  resetForm() {
    this.appointment = {};
    this.isEdit = false;
  }
}
