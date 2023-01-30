import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8000/api/users';
  urlProducion = 'https://api-eatable-production.up.railway.app/api/users';
  signup(data: any) {
    return this.http.post(this.urlProducion, data);
  }
}
