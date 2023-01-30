import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8000/api/profile/';
  urlProducion = 'https://api-eatable-production.up.railway.app/api/profile/';
  id = localStorage.getItem('id');
  getProfile() {
    return this.http.get(this.urlProducion + this.id);
  }
  editarUser(data: any) {
    return this.http.put(this.urlProducion + this.id, data);
  }
}
