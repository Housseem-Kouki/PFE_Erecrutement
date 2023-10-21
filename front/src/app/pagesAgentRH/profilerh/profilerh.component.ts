import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Agent } from 'src/app/models/agent';
import { Entretien } from 'src/app/models/entretien';
import { Offre } from 'src/app/models/offre';
import { User } from 'src/app/models/user';
import { AgentService } from 'src/app/services/agent.service';
import { EntretienService } from 'src/app/services/entretien.service';
import { OffreService } from 'src/app/services/offre.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profilerh',
  templateUrl: './profilerh.component.html',
  styleUrls: ['./profilerh.component.scss']
})
export class ProfilerhComponent implements OnInit {
  lesusers : User[];
  currentuser : User;
  agentcurrent :Agent;
  lesagents : Agent[];
  
  current_userr_id : number;
  age= {} as any;

  
  lesentretiens : Entretien[];
  nbrentretiens : number = 0;
  lesoffres : Offre[];
  nbroffres : number = 0;
  constructor( public ens:EntretienService,public ofs:OffreService   , public us : UserService,public as:AgentService) {
     this.current_userr_id = parseInt(localStorage.getItem('id'));
   
 
 

   }

  ngOnInit(): void {
    
    this.us.getUser(this.current_userr_id).subscribe(
      res  => {this.currentuser = res;
   },  
  error => {alert("Impossible d'afficher les users")}
  ); 

  this.as.getTousAgent().subscribe(
    res  => {this.lesagents = res;
      for(let agent of this.lesagents){
        if(agent.user_id == this.current_userr_id){
          this.as.getAgent(agent.id).subscribe(
            data=>{this.agentcurrent = data ;},
            err => {console.log(err)}
          );
        }
      }           
  },
error => {alert("Impossible d'afficher les agents")}
);


  //les entretiens de lagent curent
this.ens.getTousEntretien().subscribe(
  data => {this.lesentretiens = data;
  for (let entretien of this.lesentretiens){
    this.nbrentretiens = this.nbrentretiens +1;
  }}
);

//les offre publié par lagent curent
this.ofs.getTousOffre().subscribe(
  data => {this.lesoffres = data;
  for (let offre of this.lesoffres){
    if(offre.agent_id == this.agentcurrent.id){
      this.nbroffres= this.nbroffres +1;
    }
   
  }}
);
  }
  modifierUser(fup: NgForm){
  
    let posterh = fup.value['posterh'];
    let nom = fup.value['nom'];
    let prenom = fup.value['prenom'];
    let tel = fup.value['tel'];
    let email = fup.value['email'];
    let daten = fup.value['daten'];
    let civilite = fup.value['civilite'];
    

    this.agentcurrent.posterh = posterh;
    this.currentuser.nom=nom;
    this.currentuser.prenom=prenom;
    this.currentuser.tel=tel;
    this.currentuser.email=email;
    this.currentuser.daten=daten;
    this.currentuser.civilite=civilite;

  
  
    this.us.modifierUser(this.currentuser.id,this.currentuser).subscribe();
    this.as.modifierAgent(this.agentcurrent.id ,this.agentcurrent).subscribe(
      data => {alert('modification avec succès');location.reload();},
      error => {alert('erreur de modification'); console.log(this.agentcurrent)});
   
      
      

}

upload(event){
  const elem = event.target;
  console.log(elem.files[0].name);
  const formData = new FormData();
  formData.append('image', elem.files[0]);
}



}
