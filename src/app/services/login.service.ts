import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../pages/login/login.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'api/items'; // Substitua pelo seu endpoint de API

  constructor(private http: HttpClient) {}

  getLogin(): Observable<LoginComponent[]> {
    return this.http.get<LoginComponent[]>(this.apiUrl);
  }

  getCadastro(id: number): Observable<CadastroComponent> {
    return this.http.get<CadastroComponent>(`${this.apiUrl}/${id}`);
  }

  criarUsuario(item: CadastroComponent): Observable<CadastroComponent> {
    return this.http.post<CadastroComponent>(this.apiUrl, item);
  }

  editarCadastro(item: CadastroComponent): Observable<CadastroComponent> {
    return this.http.put<CadastroComponent>(`${this.apiUrl}/${item.id}`, item);
  }

  deletarItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
