import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Actividad } from '../interfaces/actividad.interface';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://localhost:7061/api/Actividad/'
  }
  
  getAll(): Promise<Actividad[]> {
    return lastValueFrom(this.httpClient.get<Actividad[]>(this.baseUrl))
  }

  getActivityByID(id : number): Promise<Actividad> {
    return lastValueFrom(this.httpClient.get<Actividad>(`${this.baseUrl}${id}`))
  }

  PostNewActivity(nuevaActividad: Actividad) {

    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token_sprencia')}`
      })
    }
    console.log(options)
    console.log(localStorage.getItem('token_sprencia'))
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, nuevaActividad, options))    
  }

  updateActivity(updateActivityForm: any, actividadId: number) {

    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token_sprencia')}`
      })
    }  
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}${actividadId}`, updateActivityForm, options))
  }

}
