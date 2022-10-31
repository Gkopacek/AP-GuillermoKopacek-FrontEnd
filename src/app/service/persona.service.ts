import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URLpersona = 'https://backendkopacekp.herokuapp.com/personas/'
  /*URLpersona = 'http://localhost:8080/personas/'*/
  
  constructor(private http:HttpClient) { }

  public lista():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URLpersona + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.URLpersona + `detail/${id}`);
  }

  /*public save(persona: Persona): Observable<any>{
    return this.http.post<any>(this.URLpersona + 'crear', persona );
  }*/

  public update(id: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.URLpersona + `modificar/${id}`, persona);
  }

/*public delete(id: number):Observable<any>{
  return this.http.delete<any>(this.URLpersona + `borrar/${id}`);
}*/
}
