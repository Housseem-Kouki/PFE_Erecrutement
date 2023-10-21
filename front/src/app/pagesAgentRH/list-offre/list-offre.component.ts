import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'src/app/models/agent';
import { Offre } from 'src/app/models/offre';
import { User } from 'src/app/models/user';
import { AgentService } from 'src/app/services/agent.service';
import { OffreService } from 'src/app/services/offre.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.scss']
})
export class ListOffreComponent implements OnInit {
  closeResult = '';
  lesoffres : Offre[];
  lesagents : Agent[];
  p : Offre;
  id : number;
  registerOffreData= {} as any;
  agentcurrent :Agent;
  lesusers : User[];

  poste ; string;
 
  constructor(public us : UserService ,public as:AgentService ,public ps:OffreService,private modalService: NgbModal ) {
    let current_userr_id = parseInt(localStorage.getItem('id'));
    this.ps.getTousOffre().subscribe(
      data  => {this.lesoffres = data;},
      error => {alert("Impossible d'afficher")}
    );

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
   }

  ngOnInit(): void {
    //tous les users 
    this.us.getTousUser().subscribe(
      data  => {this.lesusers = data;},
      error => {alert("Impossible d'afficher")}

    )

    
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

deleteOffre(id){
 
  if (window.confirm('Confirmer la supression')){
    this.ps.supprimerOffre(id).subscribe(
      data => {alert("suppresion avec succès");location.reload(); this.id = 0;},
      error => {alert('suppression erronée');}
    );
  }

}

       modifierOffre(fup:NgForm, id){

      this.ps.getOffre(id).subscribe(data => {this.p = data;});

      let poste = fup.value['poste'];
      let agemax = fup.value['agemax'];
      let diplome = fup.value['diplome'];
      let experience = fup.value['experience'];
      let mission = fup.value['mission'];
      let competence = fup.value['competence'];
      let statusoff = fup.value['statusoff'];
      
      let atouts = fup.value['atouts'];

      if(poste!="" && agemax>0  ){
        
      this.p.poste=poste;
      this.p.agemax=agemax;
      this.p.diplome=diplome;
      
      this.p.mission=mission;
      this.p.competence=competence;
      this.p.experience=experience;
      this.p.statusoff=parseInt(statusoff);
      this.p.atouts=atouts;
    
      this.p.id=id;
      this.ps.modifierOffre(id ,this.p).subscribe(
            data => {alert('modification avec succès');location.reload();},
            error => {alert('erreur de modification'); console.log(this.p)});
  }
  else
    alert("saisir tous les champs");
  
}

ajouterOffre(){
              this.registerOffreData.agent = '/api/agents/'+this.agentcurrent.id ;
              this.registerOffreData.statusoff =parseInt(this.registerOffreData.statusoff) ;
              this.ps.ajoutOffre(this.registerOffreData).subscribe(
                data => {alert("Ajout offre validé");location.reload();},
                err => {console.log(this.registerOffreData);console.log(err);alert("ajout offre échoué")}
            );
           }


           openScrollableContent(longContent) {
            this.modalService.open(longContent, { scrollable: true });
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
