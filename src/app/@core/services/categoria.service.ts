import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { getSession } from '../utils/local';
import { ICategoria } from '../models/categoria.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = environment.urlApi
  constructor(private http: HttpClient) { }

  getAllCategorias(): Observable<any> {
    let direccion = this.url + '/categorias';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.get(direccion, { headers });
  }

  getCategoriaById(categoriaId:any): Observable<any> {
    let direccion = this.url + `/categorias/${categoriaId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.get(direccion , { headers });
  }

  postCategoria(form:any):Observable<any> {
    let direccion = this.url + '/categorias';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.post(direccion, form, { headers })
  }

  putCategoria(categoria: ICategoria, id: number): Observable<any> {
    let direccion = this.url + `/categorias/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.put(direccion, { ...categoria }, { headers });
  }

  deleteCategoriaById(id: number): Observable<any> {
    let direccion = this.url + `/categorias/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.delete(direccion, { headers });
  }

  
}
