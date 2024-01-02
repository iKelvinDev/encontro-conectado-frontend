import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participante } from '../model/Participante';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/participante';

  constructor(private http: HttpClient) { }

  criarParticipante(participante: Participante): Observable<Participante> {
    return this.http.post<Participante>(this.baseUrl, participante);
  }

  obterParticipante(id: number): Observable<Participante> {
    return this.http.get<Participante>(`${this.baseUrl}/${id}`);
  }

  atualizarParticipante(id: number, participante: Participante): Observable<Participante> {
    return this.http.put<Participante>(`${this.baseUrl}/${id}`, participante);
  }

  deletarParticipante(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}