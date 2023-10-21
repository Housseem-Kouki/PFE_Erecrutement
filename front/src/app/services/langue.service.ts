import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Langue } from '../models/langue';

@Injectable({
  providedIn: 'root'
})
export class LangueService { 
  apiUrl ="http://127.0.0.1:8000/api/langues";

  constructor(public httpclient:HttpClient) { }
  getTousLangue()
  {
      return this.httpclient.get<Langue[]>(this.apiUrl);
  }

  ajoutLangue(p:Langue) 
  {
     return this.httpclient.post<any>(this.apiUrl, p);
  }

  supprimerLangue(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  getLangue(id:number)
  {
    return this.httpclient.get<Langue>(this.apiUrl+"/"+id);
  }

  modifierLangue(id:number,p:Langue)
  {
    return this.httpclient.put(this.apiUrl+"/"+id, p);
  }
}
