import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'src/app/models/agent';

import { Candidat } from 'src/app/models/candidat';
import { Candidature } from 'src/app/models/candidature';
import { Experience } from 'src/app/models/experience';
import { Formation } from 'src/app/models/formation';
import { Langue } from 'src/app/models/langue';
import { Offre } from 'src/app/models/offre';
import { User } from 'src/app/models/user';
import { AgentService } from 'src/app/services/agent.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { EntretienService } from 'src/app/services/entretien.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { FormationService } from 'src/app/services/formation.service';
import { LangueService } from 'src/app/services/langue.service';
import { OffreService } from 'src/app/services/offre.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-candidatures',
  templateUrl: './list-candidatures.component.html',
  styleUrls: ['./list-candidatures.component.scss']
})
export class ListCandidaturesComponent implements OnInit {
  lescandid : Candidature[];
  lesoffres :Offre[];
  lescandidats : Candidat[];
  lesusers:User[];
  candidature :Candidature;
  closeResult = '';
  registerEntretienData = {} as any;
  lesagents : Agent[];
  agentcurrent :Agent;

  lesformations : Formation[];
  lexperiences : Experience[];
  leslangues : Langue[];
  nomcandidat:string;
  constructor( public ens :EntretienService,public cs:CandidatService , public os:OffreService , public cans:CandidatureService , 
    public us:UserService,private modalService: NgbModal , public as:AgentService , public fors : FormationService , 
    public exps : ExperienceService , public langs : LangueService)  { 
    
    let current_userr_id = parseInt(localStorage.getItem('id'));
    this.as.getTousAgent().subscribe(
      res  => {this.lesagents = res;
        for(let agent of this.lesagents){
          if(agent.user_id == current_userr_id){
            this.as.getAgent(agent.id).subscribe(
              data=>{this.agentcurrent = data ; console.log(this.agentcurrent)},
              err => {console.log(err)}
            );
          }
  
        }   
              
    },
  error => {alert("Impossible d'afficher les agents")}
  ); 
    this.os.getTousOffre().subscribe(
      data  => {this.lesoffres = data;},
      error => {alert("Impossible d'afficher")}
    );

    this.cans.getTousCandidature().subscribe(
      data  => {this.lescandid = data; console.log(data)},
      error => {alert("Impossible d'afficher")}
    );

    this.cs.getTousCandidat().subscribe(
      data  => {this.lescandidats = data; console.log(data)},
      error => {alert("Impossible d'afficher")}
    );

    this.us.getTousUser().subscribe(
      data  => {this.lesusers = data; console.log(data)},
      error => {alert("Impossible d'afficher")}
    );


  }

  ngOnInit(): void {
    this.fors.getTousFormation().subscribe(
      data  => {this.lesformations = data; console.log(data)},
      error => {alert("Impossible d'afficher")}
    );

    this.exps.getTousExperience().subscribe(
      data  => {this.lexperiences = data; console.log(data)},
      error => {alert("Impossible d'afficher")}
    );   

    this.langs.getTousLangue().subscribe(
      data  => {this.leslangues = data; console.log(data)},
      error => {alert("Impossible d'afficher")}
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

  refuserCand(id){
    this.cans.getCandidature(id).subscribe(data => {this.candidature = data;});
    alert('aaa'+this.candidature.id)
    this.candidature.status = 0;
    this.cans.modifierCandidature(id ,this.candidature).subscribe(
      data => {alert('candidature réfusé');location.reload();},
      error => {alert('erreur de refuse'); console.log(this.candidature)});
  }     

  ajouterEntretien(candidature_id){
    this.registerEntretienData.candidature_id = candidature_id;
    
    this.registerEntretienData.agent_id = this.agentcurrent.id;
    this.registerEntretienData.agent = '/api/agents/'+this.agentcurrent.id ;
    this.registerEntretienData.candidature = '/api/candidatures/'+candidature_id ;
    alert('agent curr ='+this.registerEntretienData.agent_id)
    alert('candidature id = '+candidature_id);

   
    this.ens.ajoutEntretien(this.registerEntretienData).subscribe(
      data => {alert("Ajout entrtien validé") ;
      this.cans.getCandidature(candidature_id).subscribe(data => {this.candidature = data;
        this.candidature.status= 1;
      this.cans.modifierCandidature(this.candidature.id ,this.candidature).subscribe();
      });
     },
      err => {console.log(this.registerEntretienData);alert("ajout échoué")}
  );
   
  
  }


  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }


  Search(){
    if(this.nomcandidat !=""){
      this.lesusers = this.lesusers.filter(
        res =>{return res.nom.toLocaleLowerCase().match(this.nomcandidat.toLocaleLowerCase());}
      );
    }else if (this.nomcandidat ==""){
      this.ngOnInit();
    }
  
  }

}
