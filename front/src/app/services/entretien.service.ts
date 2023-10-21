import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entretien } from '../models/entretien';

@Injectable({
  providedIn: 'root'
})
export class EntretienService {
  apiUrl ="http://127.0.0.1:8000/api/entretiens";
  constructor(public httpclient:HttpClient) { }
  getTousEntretien()
  {
      return this.httpclient.get<Entretien[]>(this.apiUrl);
  }

  ajoutEntretien(p:Entretien) 
  {
     return this.httpclient.post<any>(this.apiUrl, p);
  }

  supprimerEntretien(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  getEntretien(id:number)
  {
    return this.httpclient.get<Entretien>(this.apiUrl+"/"+id);
  }

  modifierEntretien(id:number,p:Entretien)
  {
    return this.httpclient.put(this.apiUrl+"/"+id, p);
  }
}
