import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidature } from '../models/candidature';
@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  apiUrl ="http://127.0.0.1:8000/api/candidatures";
  constructor(public httpclient:HttpClient) { }
  getTousCandidature()
  {
      return this.httpclient.get<Candidature[]>(this.apiUrl);
  }

  ajoutCandidature(p:Candidature) 
  {
     return this.httpclient.post<any>(this.apiUrl, p);
  }

  supprimerCandidature(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  getCandidature(id:number)
  {
    return this.httpclient.get<Candidature>(this.apiUrl+"/"+id);
  }

  modifierCandidature(id:number,p:Candidature)
  {
    return this.httpclient.put(this.apiUrl+"/"+id, p);
  }
}
