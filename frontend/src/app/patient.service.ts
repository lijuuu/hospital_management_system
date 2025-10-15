import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:3000/api/patients';

  constructor(private http: HttpClient) {}

  // GET all patients
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // GET a single patient by ID
  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // POST: Add a new patient
  add(patient: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, patient);
  }

  // PUT: Update an existing patient
  update(id: string, patient: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, patient);
  }

  // DELETE: Remove a patient
  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
