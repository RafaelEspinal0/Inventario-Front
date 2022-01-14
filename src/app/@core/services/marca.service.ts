import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { getSession } from '../utils/local';

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
}
