import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { getSession } from '../utils/local';
import { IMarca } from '../models/marca.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  url = environment.urlApi
  constructor(private http: HttpClient) { }

  getAllMarcas(): Observable<any> {
    let direccion = this.url + '/marcas';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.get(direccion, { headers });
  }

  getMarcaById(marcaId:any): Observable<any> {
    let direccion = this.url + `/marcas/${marcaId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.get(direccion , { headers });
  }

  postMarca(form:any):Observable<any> {
    let direccion = this.url + '/marcas';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.post(direccion, form, { headers })
  }

  putMarca(marca: IMarca, id: number): Observable<any> {
    let direccion = this.url + `/marcas/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.put(direccion, { ...marca }, { headers });
  }

  deleteMarca(id: number): Observable<any> {
    let direccion = this.url + `/marcas/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.delete(direccion, { headers });
  }
}
