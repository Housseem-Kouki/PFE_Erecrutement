export class Experience {
    public id : number;
    public candidat_id : number;	
    public profil : string;
    public 	durree : string;
    public contrat : string;
    public fonction : string;
    constructor( candidat_id : number,profil : string,	durree : string,contrat : string,fonction : string)
    {
       this.candidat_id = candidat_id;
       this.profil = profil;
       this.durree =durree;
       this.contrat = contrat;
       this.fonction = fonction;
    }
  }
  