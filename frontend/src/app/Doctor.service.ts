import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = 'https://hospital-management-system-2kp0.onrender.com/api/doctors';  // Adjust to your backend URL

  constructor(private http: HttpClient) {}

  // Get all doctors
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Get a single doctor by id
  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Add a new doctor
  add(doctor: any): Observable<any> {
    return this.http.post(this.baseUrl, doctor);
  }

  // Update an existing doctor
  update(id: string, doctor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, doctor);
  }

  // Delete a doctor
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
