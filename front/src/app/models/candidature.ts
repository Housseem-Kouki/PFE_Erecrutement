export class Candidature {

    public id : number;
    public offre_id : number;
    public candidat_id : number;
    public createdAt : Date;
    public 	statuscan : string;

    public status : number;
  
    constructor( offre_id : number, candidat_id : number ,    createdAt : Date, statuscan : string , status:number)
    {
       this.offre_id = offre_id;
       this.candidat_id = candidat_id;
       this.createdAt = createdAt;
       this.statuscan = statuscan;
       this.status = status;
     
   
    }
  }
  