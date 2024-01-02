import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Encontro } from '../model/Encontro';

@Injectable({
  providedIn: 'root'
})

export class EncontroService {
  private baseUrl = 'http://localhost:8080/encontro';

  constructor(private http: HttpClient) { }

  criarEncontro(encontro: Encontro): Observable<Encontro> {
    return this.http.post<Encontro>(this.baseUrl, encontro);
  }

  listarEncontros(): Observable<Encontro[]> {
    return this.http.get<Encontro[]>(this.baseUrl);
  }

  detalharEncontro(id: number): Observable<Encontro> {
    return this.http.get<Encontro>(`${this.baseUrl}/${id}`);
  }

  atualizarEncontro(id: number, encontro: Encontro): Observable<Encontro> {
    return this.http.put<Encontro>(`${this.baseUrl}/${id}`, encontro);
  }

  excluirEncontro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}