import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  private baseUrl: string;

  constructor(private httpclient: HttpClient) { 
    this.baseUrl = 'https://localhost:7061/api/Users/'
  }

  login(loginFormValue: any): Promise<any> {
    return lastValueFrom(this.httpclient.post<any>(`${this.baseUrl}authenticate`, loginFormValue))
  }

  isLogged(): boolean {
    if (localStorage.getItem('token_sprencia')) {
      return true
    } else {
      return false
    }
  }

}
