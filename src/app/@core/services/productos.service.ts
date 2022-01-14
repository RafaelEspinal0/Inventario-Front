import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { getSession } from '../utils/local';
import { IProducto } from '../models/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = environment.urlApi
  constructor(private http: HttpClient) { }

  getAllProductos(): Observable<any> {
    let direccion = this.url + '/productos';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.get(direccion , { headers });
  }

  getAllProductosById(productoId:any): Observable<any> {
    let direccion = this.url + `/productos/${productoId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.get(direccion , { headers });
  }

  postProductos(form:any):Observable<any> {
    let direccion = this.url + '/productos';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.post(direccion, form, { headers })
  }

  putProductos(producto: IProducto, id: number): Observable<any> {
    let direccion = this.url + `/productos/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.put(direccion, { ...producto }, { headers });
  }

  deleteProductoById(id: number): Observable<any> {
    let direccion = this.url + `/productos/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.delete(direccion, { headers });
  }

}
