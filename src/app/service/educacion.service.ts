import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  /*educaionURL: string = "http://localhost:8080/estudios/"*/ 
  educacionURL: string = 'https://backendkopacekp.herokuapp.com/estudios/'
  constructor(private http:HttpClient) { }
  
  public lista():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.educacionURL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.educacionURL + `detail/${id}`);
  }

  public save(educaion: Educacion): Observable<any>{
    return this.http.post<any>(this.educacionURL + 'crear', educaion );
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.educacionURL + `modificar/${id}`, educacion);
  }

public delete(id: number):Observable<any>{
  return this.http.delete<any>(this.educacionURL + `borrar/${id}`);
}


}
