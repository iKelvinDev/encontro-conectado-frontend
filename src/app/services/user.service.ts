import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/usuario://api.example.com'; // URL da sua API

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user`);
  }

  getAddressData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/address`);
  }

  cadastrarUsuario(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cadastrar-usuario`, userData);
  }
  
}
