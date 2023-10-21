import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AjaxTimeoutError } from 'rxjs-compat';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  nom ; string;
  lesusers : User[];
  id : number;
  closeResult = '';
  registerUserData = {} as any;
  u :User;
  constructor(public us:UserService,private modalService: NgbModal) {
    this.us.getTousUser().subscribe(
      data  => {this.lesusers = data;},
      error => {alert("Impossible d'afficher les utilisateurs")}
    );

    
   }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }




  deleteUser(id){
 
    if (window.confirm('Confirmer la supression')){
      this.us.supprimerUser(id).subscribe(
        data => {alert("suppresion avec succès");location.reload(); this.id = 0;},
        error => {alert('suppression erronée');}
      );
    }

}

modifier(fup:NgForm,id){
this.us.getUser(id).subscribe(data => {this.u = data;});

let nom = fup.value['nom'];
let prenom = fup.value['prenom'];
let tel = fup.value['tel'];
let email = fup.value['email'];
let daten = fup.value['daten'];
let roles = fup.value['roles'];


if(nom!="" && tel>0  ){
        
  this.u.nom=nom;
  this.u.prenom=prenom;
  this.u.tel=tel;
  this.u.email=email;
  this.u.daten=daten;
  this.u.roles=roles;
 

  this.u.id=id;
  this.us.modifierUser(id ,this.u).subscribe(
        data => {alert('modification avec succès');location.reload();},
        error => {alert('erreur de modification');});
}

}


ajouterUser(){
  this.registerUserData.roles = 'ROLE_USER';
  this.us.ajoutUser(this.registerUserData).subscribe(
    data => {console.log(data)
      alert("Ajout user validé");location.reload();},
    err => {console.log(this.registerUserData);console.log(err);alert("ajout échoué")}
)
}

ajouterAgent(){

  this.registerUserData.roles = 'ROLE_AGENT';
  this.us.ajoutAgent(this.registerUserData).subscribe(
    data => {alert("Ajout user validé");location.reload();},
    err => {console.log(this.registerUserData);console.log(err);alert("ajout échoué")}
)
  
}


Search(){
  if(this.nom !=""){
    this.lesusers = this.lesusers.filter(
      res =>{return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());}
    );
  }else if (this.nom ==""){
    this.ngOnInit();
  }

}

}
