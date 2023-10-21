import { User } from "./user";

export class Candidat {

    public id : number;
    public codepostal : number;
    public gouvernorat : string;
    public pays : string;


    public user_id : number;

    public user : User;
    
   
  
    constructor( codepostal : number, gouvernorat : string ,    pays : string, user_id : number,user : User)
    {
       this.codepostal = codepostal;
       this.gouvernorat = gouvernorat;
       this.pays = pays;
       this.user_id = user_id;
       this.user = user;
   
    }
  }
  