import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  imports:[CommonModule, FormsModule],
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any[] = [];
  newPatient: any = {};
  isEdit = false;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    });
  }

  onSubmit() {
    const patientToSend = {
      ...this.newPatient,
      medicalHistory: this.newPatient.medicalHistory?.split(',').map((h: string) => h.trim())
    };

    if (this.isEdit) {
      this.patientService.update(this.newPatient._id, patientToSend).subscribe(() => {
        this.resetForm();
        this.getPatients();
      });
    } else {
      this.patientService.add(patientToSend).subscribe(() => {
        this.resetForm();
        this.getPatients();
      });
    }
  }

  editPatient(patient: any) {
    this.newPatient = { ...patient, medicalHistory: patient.medicalHistory.join(', ') };
    this.isEdit = true;
  }

  deletePatient(id: string) {
    this.patientService.delete(id).subscribe(() => {
      this.getPatients();
    });
  }

  resetForm() {
    this.newPatient = {};
    this.isEdit = false;
  }
}
