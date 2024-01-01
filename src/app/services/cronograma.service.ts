import { Cronograma } from 'src/app/modelo/Cronograma';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {
  private baseUrl = 'http://localhost:8080/cronograma'; // Atualize com o URL da sua API

  constructor(private http: HttpClient) { }

  criarCronograma(cronograma: Cronograma): Observable<Cronograma> {
    return this.http.post<Cronograma>(this.baseUrl, cronograma);
  }

  visualizarCronograma(): Observable<Cronograma[]> {
    return this.http.get<Cronograma[]>(`${this.baseUrl}`);
  }
}
