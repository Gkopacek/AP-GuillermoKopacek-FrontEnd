import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  educaionURL: string = "http://localhost:8080/estudios/" 

  constructor(private http:HttpClient) { }
  
  public lista():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.educaionURL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.educaionURL + `detail/${id}`);
  }

  public save(educaion: Educacion): Observable<any>{
    return this.http.post<any>(this.educaionURL + 'crear', educaion );
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.educaionURL + `modificar/${id}`, educacion);
  }

public delete(id: number):Observable<any>{
  return this.http.delete<any>(this.educaionURL + `borrar/${id}`);
}


}
