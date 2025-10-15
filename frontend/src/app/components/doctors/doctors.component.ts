import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../Doctor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  imports:[CommonModule,FormsModule],
  styleUrls: ['./doctors.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: any[] = [];
  doctor: any = {};
  isEdit = false;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  // Fetch all doctors from the backend
  getDoctors() {
    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    });
  }

  // Handle form submission for adding or updating a doctor
  onSubmit() {
    if (this.isEdit) {
      this.doctorService.update(this.doctor._id, this.doctor).subscribe(() => {
        this.resetForm();
        this.getDoctors();
      });
    } else {
      this.doctorService.add(this.doctor).subscribe(() => {
        this.resetForm();
        this.getDoctors();
      });
    }
  }

  // Prepare the form for editing a doctor
  editDoctor(doc: any) {
    this.doctor = { ...doc };
    this.isEdit = true;
  }

  // Handle deletion of a doctor
  deleteDoctor(id: string) {
    this.doctorService.delete(id).subscribe(() => {
      this.getDoctors();
    });
  }

  // Reset the form
  resetForm() {
    this.doctor = {};
    this.isEdit = false;
  }
}
