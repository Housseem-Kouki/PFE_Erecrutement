import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Agent } from 'src/app/models/agent';
import { Candidat } from 'src/app/models/candidat';

import { User } from 'src/app/models/user';
import { AgentService } from 'src/app/services/agent.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profilea',
  templateUrl: './profilea.component.html',
  styleUrls: ['./profilea.component.scss']
})
export class ProfileaComponent implements OnInit {
lesusers : User[];
currentuser : User;

lesagents : Agent[];
nbragent : number =0;

lescandidats : Candidat[];
nbrcandidat : number =0;
current_userr_id : number;

datee :number;
  constructor(public us : UserService  , public as : AgentService , public cs : CandidatService) { 
 this.current_userr_id = parseInt(localStorage.getItem('id'));
   
    
     
        
  }

  ngOnInit(): void {
    this.us.getUser(this.current_userr_id).subscribe(
      res  => {this.currentuser = res;
 
     console.log(); },
  error => {alert("Impossible d'afficher les users")}
  ); 

  this.as.getTousAgent().subscribe(
    res  => {this.lesagents = res;
    for (let agent of this.lesagents){
      this.nbragent = this.nbragent+1;
      
    }},
  error => {alert("Impossible d'afficher les users")}
  );

  this.cs.getTousCandidat().subscribe(
    res  => {this.lescandidats = res;
    for (let candidat of this.lescandidats){
      this.nbrcandidat = this.nbrcandidat+1;
      
    }},
  error => {alert("Impossible d'afficher les users")}
  );

  }

  modifierUser(fup: NgForm){
    let nom = fup.value['nom'];
    let prenom = fup.value['prenom'];
    let email = fup.value['email'];
    let tel = fup.value['tel'];
    let daten = fup.value['daten'];
    let civilite = fup.value['civilite'];




    if (nom !="" && tel>0 ){
      this.currentuser.nom = nom;
      this.currentuser.prenom = prenom;
      this.currentuser.email = email;
      this.currentuser.tel = tel;
      this.currentuser.daten = daten;
      this.currentuser.civilite = civilite;

      this.us.modifierUser(this.currentuser.id,this.currentuser).subscribe(
        data => {alert('modification avec succès');console.log(this.currentuser);},
        error => {alert('erreur de modification'); console.log(this.currentuser)});

        
    }
  }

}
