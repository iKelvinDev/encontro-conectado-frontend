import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private baseUrl = 'http://localhost:8080/tarefa';

  constructor(private http: HttpClient) { }

  listarTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.baseUrl}`);
  }

  obterTarefaPorId(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.baseUrl}/${id}`);
  }

  cadastrarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.baseUrl}`, tarefa);
  }

  atualizarTarefa(id: number, tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.baseUrl}/${id}`, tarefa);
  }

  removerTarefa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}