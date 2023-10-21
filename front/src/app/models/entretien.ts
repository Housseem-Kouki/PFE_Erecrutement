export class Entretien {

    public id : number;
    public agent_id  : number;
    public candidature_id : number;
    public dateentretien : Date;
    public commentaire : string;
    public etat : string;
  
    constructor( agent_id  : number, candidature_id : number ,    dateentretien : Date, commentaire : string ,etat:string)
    {
       this.agent_id  = agent_id ;
       this.candidature_id = candidature_id;
       this.dateentretien = dateentretien;
       this.commentaire = commentaire;
       this.etat = etat;
     
    }
  }
  