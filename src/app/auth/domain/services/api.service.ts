import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, {
      headers: this.getAuthHeaders(),
      withCredentials: true,
    })
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      "Content-type": "application/json"
    })
  }
}
