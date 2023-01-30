import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8000/api/login';
  urlProducion = 'https://api-eatable-production.up.railway.app/api/login';
  login(data: any) {
    return this.http.post(this.urlProducion, data);
  }
}
