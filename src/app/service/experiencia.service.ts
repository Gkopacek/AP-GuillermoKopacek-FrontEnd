import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  /*experienciaURL = 'http://localhost:8080/explaboral/'*/
  experienciaURL = 'https://backendkopacekp.herokuapp.com/explaboral/'

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.experienciaURL + `detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.experienciaURL + 'crear', experiencia)
  }

  public update(id: number, experiencia:Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.experienciaURL + `modificar/${id}`, experiencia)
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.experienciaURL + `borrar/${id}`);
  }
}
