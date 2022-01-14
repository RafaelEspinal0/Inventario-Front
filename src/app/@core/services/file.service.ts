import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { getSession } from '../utils/local';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {}
  url = `${environment.urlApi}/upload`;

  uploadFiles(formData) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${getSession().jwt}`,
    });
    return this.http.post(this.url, formData, { headers });
  }
}
