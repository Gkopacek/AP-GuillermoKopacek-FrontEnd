import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private httpClient:HttpClient) { }
  proyectosURL = 'http://localhost:8080/proyectos/'

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectosURL + 'lista');
  }
  
  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyectosURL + `detail/${id}`);
  }

  public update(id: number, proyecto:Proyecto){
    return this.httpClient.put<any>(this.proyectosURL + `modificar/${id}`, proyecto);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.proyectosURL + 'crear', proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proyectosURL + `borrar/${id}`);
  }
  
}
