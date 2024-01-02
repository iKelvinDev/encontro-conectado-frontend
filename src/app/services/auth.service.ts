import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/login';
  private participanteId: number | undefined;
  constructor(private http: HttpClient) { }

  private isTokenExpired(token: string): boolean {
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // Convertendo o token para número
    const tokenExpiration = parseInt(token, 10); // Supondo que o token seja um timestamp

    // Verificando se o token está expirado
    return tokenExpiration < currentTimestamp;
  }
  setParticipanteId(id: number): void {
    this.participanteId = id;
  }

  getParticipanteId(): number | undefined {
    return this.participanteId;
  }
  getUserId(): number | undefined {
    const storedUserId = localStorage.getItem('id');
    console.log('Stored User ID:', storedUserId); // Verifique o valor armazenado

    return storedUserId ? parseInt(storedUserId, 10) : undefined;
  }


  login(login: string, senha: string): Observable<any> {
    return this.http.post<any>(this.baseUrl, { login, senha }).pipe(
      tap((response) => {
        if (response && response.token && response.id) {

          // Verifica se o token atual está expirado
          const storedToken = localStorage.getItem('token');
          if (storedToken && this.isTokenExpired(storedToken)) {
            localStorage.removeItem('token'); // Remove o token expirado
          }
        // Armazena o token no localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.id);
        }
      })
    );
  }
  logoff(): void {
    localStorage.clear();
  }


  estaAutenticado(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    else {
      return false;
    }
  }


  getUserInfo(): Observable<any> {
    // obter informações do usuário do backend, usando o token JWT
    const token = localStorage.getItem('token');

    if (!token) {
      // Caso não haja token, retorna um Observable vazio ou com um valor nulo
      return of(null);
    }

    // chamada à API para obter as informações do usuário, usando o token
    return this.http.get<any>(`${this.baseUrl}/user-info`, {
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