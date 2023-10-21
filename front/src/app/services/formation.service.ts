import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  apiUrl ="http://127.0.0.1:8000/api/formations";
  constructor(public httpclient:HttpClient) { }
  getTousFormation()
  {
      return this.httpclient.get<Formation[]>(this.apiUrl);
  }

  ajoutFormation(p:Formation) 
  {
     return this.httpclient.post<any>(this.apiUrl, p);
  }

  supprimerFormation(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  getFormation(id:number)
  {
    return this.httpclient.get<Formation>(this.apiUrl+"/"+id);
  }

  modifierFormation(id:number,p:Formation)
  {
    return this.httpclient.put(this.apiUrl+"/"+id, p);
  }
}
