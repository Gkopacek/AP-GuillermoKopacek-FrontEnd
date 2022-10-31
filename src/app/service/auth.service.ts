import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { UsuarioLogin } from '../model/usuario-login'; 
import { UsuarioNuevo } from '../model/usuario-nuevo'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*authURL = 'http://localhost:8080/auth/';*/
  authURL = 'https://backendkopacekp.herokuapp.com/auth/'

  constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: UsuarioNuevo): Observable<any>{
   return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: UsuarioLogin): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
 }
}
