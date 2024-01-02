import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../modelo/Equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private baseUrl = 'http://localhost:8080/equipe';

  constructor(private http: HttpClient) { }

  cadastrarEquipe(equipe: Equipe): Observable<any> {
    return this.http.post(`${this.baseUrl}`, equipe);
  }

  obterEquipePorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  listarEquipes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  atualizarEquipe(id: number, equipe: Equipe): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, equipe);
  }

  removerEquipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
