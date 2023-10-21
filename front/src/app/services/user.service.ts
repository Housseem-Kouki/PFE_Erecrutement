import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  //définir l'URL de l'api rest
   apiUrl ="http://127.0.0.1:8000/api/users";
   private _regesterUrl="http://127.0.0.1:8000/api/inscription";
   private _regesterUrlAgent="http://127.0.0.1:8000/api/inscritAgent";

  constructor(public httpclient:HttpClient) { }
  getTousUser()
  {
      return this.httpclient.get<User[]>(this.apiUrl);
  }

  supprimerUser(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  modifierUser(id:number,p:User)
  {
    return this.httpclient.put(this.apiUrl+"/"+id, p);
  }

  getUser(id:number)
  {
    return this.httpclient.get<User>(this.apiUrl+"/"+id);
  }

  ajoutUser(p:User) 
  {
     return this.httpclient.post<any>(this._regesterUrl, p);
  }
  ajoutAgent(p:User){
    return this.httpclient.post<any>(this._regesterUrlAgent, p);
  }

}
