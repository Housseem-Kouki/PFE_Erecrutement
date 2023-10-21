import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'src/app/models/agent';
import { Candidat } from 'src/app/models/candidat';
import { Candidature } from 'src/app/models/candidature';
import { Entretien } from 'src/app/models/entretien';
import { Offre } from 'src/app/models/offre';
import { User } from 'src/app/models/user';
import { AgentService } from 'src/app/services/agent.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { EntretienService } from 'src/app/services/entretien.service';
import { OffreService } from 'src/app/services/offre.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-entretiens',
  templateUrl: './list-entretiens.component.html',
  styleUrls: ['./list-entretiens.component.scss']
})
export class ListEntretiensComponent implements OnInit {
  lesagents : Agent[];
  agentcurrent : Agent;
  lesentretiens : Entretien[];
  lescandidatures :Candidature[];
  lesoffres:Offre[];
  lesusers:User[];
  closeResult = '';
  entretien : Entretien;
  registerEntretienData = {} as any;
  poste:string;
  constructor(public us:UserService,public cans : CandidatureService,public as : AgentService  , public ens :EntretienService , public os:OffreService,
    private modalService: NgbModal) {
    let current_userr_id = parseInt(localStorage.getItem('id'));
    this.ens.getTousEntretien().subscribe(
      data  => {this.lesentretiens = data;},
      error => {alert("Impossible d'afficher les entretiens")}
    );
    this.cans.getTousCandidature().subscribe(
      data  => {this.lescandidatures = data;},
      error => {alert("Impossible d'afficher les candidature")}
    );

    this.os.getTousOffre().subscribe(
      data  => {this.lesoffres = data;},
      error => {alert("Impossible d'afficher les offres")}
    );


    this.as.getTousAgent().subscribe(
      res  => {this.lesagents = res;
        for(let agent of this.lesagents){
          if(agent.user_id == current_userr_id){
            this.as.getAgent(agent.id).subscribe(
              data=>{this.agentcurrent = data ;},
              err => {console.log(err)}
            );
          }
  
        }   
              
    },
  error => {alert("Impossible d'afficher les agents")}
  );



   }

  ngOnInit(): void {
    this.us.getTousUser().subscribe(
      data  => {this.lesusers = data;},
      error => {alert("Impossible d'afficher les offres")}
    );
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


  modifierEntretien(fen:NgForm, id){

    this.ens.getEntretien(id).subscribe(data => {this.entretien = data;});

    let dateentretien = fen.value['dateentretien'];
    let etat = fen.value['etat'];
    let commentaire = fen.value['commentaire'];
    

    if(etat!="" && commentaire!=""  ){
      
    this.entretien.dateentretien=dateentretien;
    this.entretien.etat=etat;
    this.entretien.commentaire=commentaire;
 
  
    this.entretien.id=id;
    this.ens.modifierEntretien(id ,this.entretien).subscribe(
          data => {alert('modification avec succès');location.reload();},
          error => {alert('erreur de modification'); console.log(this.entretien)});
}
else{
  alert("saisir tous les champs");

}
   
  

  }


  Search(){
    if(this.poste !=""){
      this.lesoffres = this.lesoffres.filter(
        res =>{return res.poste.toLocaleLowerCase().match(this.poste.toLocaleLowerCase());}
      );
    }else if (this.poste ==""){
      this.ngOnInit();
    }
  
  }
}




