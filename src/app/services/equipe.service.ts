import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../model/Equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private baseUrl = 'http://localhost:8080/equipe';

  constructor(private http: HttpClient) { }

  listarEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${this.baseUrl}`);
  }

  obterEquipePorId(id: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.baseUrl}/${id}`);
  }

  cadastrarEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(`${this.baseUrl}`, equipe);
  }

  atualizarEquipe(id: number, equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.baseUrl}/${id}`, equipe);
  }

  removerEquipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}