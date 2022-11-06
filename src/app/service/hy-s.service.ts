import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HyS } from '../model/hy-s.model';

@Injectable({
  providedIn: 'root'
})
export class HySService {

  constructor(private http: HttpClient) { }
  HySURL= 'http://localhost:8080/skills/';
  /*HySURL= 'https://backendapgk2022.herokuapp.com/skills/'*/

  public lista():Observable<HyS[]>{
    return this.http.get<HyS[]>(this.HySURL + 'lista');
  }

  public detail(id: number): Observable<HyS>{
    return this.http.get<HyS>(this.HySURL + `detail/${id}`)
  }

  public save(hys: HyS): Observable<any>{
    return this.http.post<any>(this.HySURL + 'crear', hys)
  }

  public update(id: number, hys: HyS): Observable<any>{
    return this.http.put<any>(this.HySURL + `modificar/${id}`, hys)
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.HySURL + `borrar/${id}`);
  }
}

