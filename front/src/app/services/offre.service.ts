import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../models/offre';
@Injectable({
  providedIn: 'root'
})
export class OffreService {

   apiUrl ="http://127.0.0.1:8000/api/offres";

  constructor(public httpclient:HttpClient) { }

  getTousOffre()
  {
      return this.httpclient.get<Offre[]>(this.apiUrl);
  }

  ajoutOffre(p:Offre) 
  {
     return this.httpclient.post<any>(this.apiUrl, p);
  }

  supprimerOffre(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  getOffre(id:number)
  {
    return this.httpclient.get<Offre>(this.apiUrl+"/"+id);
  }

  modifierOffre(id:number,p:Offre)
  {
    return this.httpclient.put(this.apiUrl+"/"+id, p);
  }
}
