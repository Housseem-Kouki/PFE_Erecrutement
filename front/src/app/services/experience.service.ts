import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  apiUrl ="http://127.0.0.1:8000/api/experiences";
  constructor(public httpclient:HttpClient) { }
  getTousExperience()
  {
      return this.httpclient.get<Experience[]>(this.apiUrl);
  }

  ajoutExperience(p:Experience) 
  {
     return this.httpclient.post<any>(this.apiUrl, p);
  }

  supprimerExperience(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  getExperience(id:number)
  {
    return this.httpclient.get<Experience>(this.apiUrl+"/"+id);
  }

  modifierExperience(id:number,p:Experience)
  {
    return this.httpclient.put(this.apiUrl+"/"+id, p);
  }
}
