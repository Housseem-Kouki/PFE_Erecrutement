import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { Offre } from '../models/offre';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

   apiUrl ="http://127.0.0.1:8000/api/candidats";
  constructor(public httpclient:HttpClient) { }

  getTousCandidat()
  {
      return this.httpclient.get<Candidat[]>(this.apiUrl);
  }

  ajoutCandidat(p:Candidat) 
  {
     return this.httpclient.post<any>(this.apiUrl, p);
  }

  supprimerCandidat(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  getCandidat(id:number)
  {
    return this.httpclient.get<Candidat>(this.apiUrl+"/"+id);
  }

  modifierCandidat(id:number,p:Candidat)
  {
    return this.httpclient.put(this.apiUrl+"/"+id, p);
  }


}
