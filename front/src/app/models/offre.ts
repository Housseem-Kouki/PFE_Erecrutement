export class Offre {

    public id : number;
    public poste : string;
    public agemax : number;
    public diplome : string;

    public mission : string;
    public experience : string;
    public competence : string;
    public atouts : string;
    public statusoff : number;

    public createdAt :Date;
    public updatedAt :Date;

    public agent_id : number ;
   
   
  
    constructor( poste : string,agemax : number,diplome : string, atouts : string, mission : string, competence : string, statusoff : number,
      createdAt :Date,updatedAt :Date ,experience:string ,agent_id:number)
    {
       this.poste = poste;
       this.agemax = agemax;
       this.diplome = diplome;
       this.atouts = atouts;
       this.mission = mission;
       this.competence = competence;
       this.statusoff = statusoff;
       this.createdAt = createdAt;
       this.updatedAt = updatedAt;
       this.experience = experience;
       this.agent_id=agent_id;
   
    }
  }
  