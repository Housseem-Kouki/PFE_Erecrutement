export class Langue {
    public id : number;
    public candidat_id : number;	
    public nomlangue : string;
    public 	niveau : string;

    constructor( candidat_id : number,nomlangue : string,	niveau : string)
    {
       this.candidat_id = candidat_id;
       this.nomlangue = nomlangue;
       this.niveau =niveau;

    }
  }
  