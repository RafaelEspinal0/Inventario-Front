import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { getSession } from '../utils/local';

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
}
