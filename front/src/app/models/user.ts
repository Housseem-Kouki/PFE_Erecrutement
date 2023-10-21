export class User {

    public id: number;
    public email: string;
    public password: string;
    public roles: Array<string> ;
    public date : Date;
    public nom: string;
    public prenom: string;

    public tel: number;
    public civilite: string;

    public createdAt : Date;

    public daten: Date;

    public updatedAt : Date;
    public image: String;

    constructor(email:string,password:string,roles: Array<string> ,nom:string,prenom:string,date:Date ,tel:number,civilite: string , daten:Date,
        createdAt : Date , updatedAt :Date ,image : String) {
        this.email=email;
        this.password=password;
        this.roles=roles;
        this.nom=nom;
        this.prenom=prenom;
        this.date=date;
        this.tel=tel;
        this.civilite=civilite;
        this.daten=daten;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt;
        this.image = image;
    }
} 