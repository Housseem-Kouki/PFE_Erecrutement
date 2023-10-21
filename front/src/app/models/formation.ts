export class Formation {
    public id : number;
    public candidat_id : number;	
    public nivetude : string;
    public 	diplome : string;
    public etablissement : string;
    public specialite : string;
    constructor( candidat_id : number,nivetude : string,	diplome : string,etablissement : string,specialite : string)
    {
       this.candidat_id = candidat_id;
       this.nivetude = nivetude;
       this.diplome =diplome;
       this.etablissement = etablissement;
       this.specialite = specialite;
    }
  }
  