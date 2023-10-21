import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from '../models/agent';
@Injectable({
  providedIn: 'root'
})
export class AgentService {
   //définir l'URL de l'api rest
   apiUrl ="http://127.0.0.1:8000/api/agents";
  constructor(public httpclient:HttpClient) { }
  getTousAgent()
  {
      return this.httpclient.get<Agent[]>(this.apiUrl);
  }

  ajoutAgent(p:Agent) 
  {
     return this.httpclient.post<any>(this.apiUrl, p);
  }

  supprimerAgent(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  getAgent(id:number)
  {
    return this.httpclient.get<Agent>(this.apiUrl+"/"+id);
  }

  modifierAgent(id:number,p:Agent)
  {
    return this.httpclient.put(this.apiUrl+"/"+id, p);
  }

}
