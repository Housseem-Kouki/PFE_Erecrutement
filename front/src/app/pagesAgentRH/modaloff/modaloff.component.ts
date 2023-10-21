import {Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'src/app/models/agent';
import { Offre } from 'src/app/models/offre';
import { AgentService } from 'src/app/services/agent.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-modaloff-content',
  template: `
  <div class="modal-header">
      <h5 class="modal-title text-center">Ajouter Offre</h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
      </button>
  </div>

  <form class="register-form" #f="ngForm"  (ngSubmit) = "ajouter()">
  <div class="modal-body">
  <div class="form-row">
      <div class="col">
          <label>Poste</label> 
          <div class="input-group form-group-no-border" >
          <div class="input-group-prepend">
          <span class="input-group-text">
          <i class="ni  ni-circle-08"></i>
          </span>
          </div>
          <input type="text" class="form-control"  [(ngModel)]="registerOffreData.poste" required name="poste">
        </div>
    </div>

    <div class="form-row">
      <div class="col">
          <label>Age Maximum</label> 
          <div class="input-group form-group-no-border" >
          <div class="input-group-prepend">
          <span class="input-group-text">
          <i class="ni  ni-circle-08"></i>
          </span>
          </div>
          <input type="number" class="form-control"  [(ngModel)]="registerOffreData.agemax" required name="agemax">
        </div>
    </div>
</div>

<div class="form-row">
      <div class="col">
          <label>Nature Diplome</label> 
          <div class="input-group form-group-no-border" >
          <div class="input-group-prepend">
          <span class="input-group-text">
          <i class="ni  ni-circle-08"></i>
          </span>
          </div>
          <input type="text" class="form-control"  [(ngModel)]="registerOffreData.diplome" required name="diplome">
        </div>
    </div>
</div>


<div class="form-row">
      <div class="col">
          <label>Expérinecee</label> 
          <div class="input-group form-group-no-border" >
          <div class="input-group-prepend">
          <span class="input-group-text">
          <i class="ni  ni-circle-08"></i>
          </span>
          </div>
          <input type="text" class="form-control"  [(ngModel)]="registerOffreData.experience" required name="experience">
        </div>
    </div>
</div>

<div class="form-row">
      <div class="col">
          <label>Mission</label> 
          <div class="input-group form-group-no-border" >
          <div class="input-group-prepend">
          <span class="input-group-text">
          <i class="ni  ni-circle-08"></i>
          </span>
          </div>
          <input type="text" class="form-control"  [(ngModel)]="registerOffreData.mission" required name="mission">
        </div>
    </div>
</div>

<div class="form-row">
      <div class="col">
          <label>Compétence</label> 
          <div class="input-group form-group-no-border" >
          <div class="input-group-prepend">
          <span class="input-group-text">
          <i class="ni  ni-circle-08"></i>
          </span>
          </div>
          <input type="text" class="form-control"  [(ngModel)]="registerOffreData.competence" required name="competence">
        </div>
    </div>
</div>

<div class="form-row">
      <div class="col">
          <label>Status Offre</label> 
          <div class="input-group form-group-no-border" >
          <div class="input-group-prepend">
          <span class="input-group-text">
          <i class="ni  ni-circle-08"></i>
          </span>
          </div>
          <input type="number" class="form-control"  [(ngModel)]="registerOffreData.statusoff" required name="statusoff">
        </div>
    </div>
</div>

<div class="form-row">
      <div class="col">
          <label>Atouts</label> 
          <div class="input-group form-group-no-border" >
          <div class="input-group-prepend">
          <span class="input-group-text">
          <i class="ni  ni-circle-08"></i>
          </span>
          </div>
          <input type="text" class="form-control"  [(ngModel)]="registerOffreData.atouts" required name="atouts">
        </div>
    </div>
</div>
  




  </div>
 
  

  </div>
  <div class="modal-footer">
      <div class="left-side">
          <button type="submit" class="btn btn-primary" (click)="activeModal.close('Close click')">Ajouter</button>
      </div>
      <div class="divider"></div>
      <div class="right-side">
          <button type="reset" class="btn btn-danger btn-link" >Annuler</button>
      </div>
  </div></form>
  `

})


export class NgbdModalContent {
  @Input() name;

  registerOffreData = {} as any;
  lesagents :Agent[];
  
  constructor(public as:AgentService,public ps:OffreService ,public activeModal: NgbActiveModal) {}

ajouter(){
  
   /*
        let userr_id = parseInt(localStorage.getItem('id'));
    this.as.getTousAgent().subscribe(
        data  => {this.lesagents = data; console.log(data) ; 
            for (let agent of this.lesagents){
               if(agent.user_id = userr_id){
                  let statuscan ='en cours';
                  this.registerCandidatureData.offre = '/api/offres/'+offre_id;
                  this.registerCandidatureData.candidat = '/api/candidats/'+candidat.id;
                  this.registerCandidatureData.statuscan = statuscan;
                  
                  this.can.ajoutCandidature(this.registerCandidatureData).subscribe(
                    data => {alert("Ajout candidature validé");location.reload();},
                    err => {console.log(this.registerCandidatureData);console.log(err);alert("ajout candidature échoué")}
                )
               }
                
            }
        },
        error => {alert("Impossible d'afficher les candiats")}
      ); 



    this.ps.ajoutOffre(this.registerOffreData).subscribe(
        data => {alert("Ajout d offre validé");location.reload();},
        err => {console.log(this.registerOffreData);console.log(err);alert("ajout échoué")}
    )   */

}
}
@Component({
  selector: 'app-modaloff',
  templateUrl: './modaloff.component.html',
  styleUrls: ['./modaloff.component.scss']
})

export class NgbdModalComponent {
  constructor(public ps:OffreService ,private modalService: NgbModal) {}
  open() {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
  }
  
 
}

