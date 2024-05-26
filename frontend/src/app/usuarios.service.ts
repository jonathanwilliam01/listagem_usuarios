import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://localhost:8000/index.php';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  addUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  updateUsuario(usuario: Usuario): Observable<any> {
    return this.http.put(this.apiUrl, usuario);
  }

  deleteUsuario(id: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { id: id }
    };
    return this.http.delete(this.apiUrl, options);
  }
}
