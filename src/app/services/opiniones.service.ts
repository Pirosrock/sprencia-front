import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  private baseUrl: string;
   
  constructor(private httClient: HttpClient) { 
    this.baseUrl = "https://localhost:7061/api/Opinion/"
  }

  postNewOpinion(nuevaOpinion: any) {    
    return lastValueFrom(this.httClient.post<any>(this.baseUrl, nuevaOpinion))    
  }

  deleteOpinion(id: number)
  {
    return lastValueFrom(this.httClient.delete<any>(`https://localhost:7061/api/Opinion?id=${id}`))
  }


}
