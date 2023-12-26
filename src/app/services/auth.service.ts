import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, senha: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      map((response: any) => {
        // salvar o token JWT no localStorage após o login
        localStorage.setItem('token', response.token);
        return response; // retornar qualquer informação relevante recebida do backend
      }),
      catchError((error) => {
        // erros de login
        console.error('Erro ao fazer login:', error);
        return of(null); // retorna um Observable com valor nulo em caso de erro
      })
    );
  }

  logout(): void {
    // remover o token do localStorage após o logout
    localStorage.removeItem('token');
  }

  getUserInfo(): Observable<any> {
    // obter informações do usuário do backend, usando o token JWT
    const token = localStorage.getItem('token');

    if (!token) {
      // Caso não haja token, retorna um Observable vazio ou com um valor nulo
      return of(null);
    }

    // chamada à API para obter as informações do usuário, usando o token
    return this.http.get<any>(`${this.apiUrl}/user-info`, {
      headers: {
        Authorization: `Bearer ${token}` // adiciona o token JWT no cabeçalho da requisição
      }
    }).pipe(
      catchError((error) => {
        // erros ao obter as informações do usuário
        console.error('Erro ao obter informações do usuário:', error);
        return of(null); // retorna um Observable com valor nulo em caso de erro
      })
    );
  }

  getUserType(): Observable<string> {
    // obter o tipo de usuário após o login
    return this.getUserInfo().pipe(
      map((userInfo: any) => {
        // considere um campo 'nivel_acesso' nas informações do usuário
        return userInfo.nivel_acesso; // Suponha que 'nivel_acesso' contenha o tipo do usuário (seguimista, equipista, etc.)
      }),
      catchError((error) => {
        console.error('Erro ao obter o tipo de usuário:', error);
        return of(''); // Retorna um valor vazio em caso de erro na obtenção do tipo de usuário
      })
    );
  }

}
