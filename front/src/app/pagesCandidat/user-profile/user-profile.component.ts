import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Candidat } from 'src/app/models/candidat';
import { Candidature } from 'src/app/models/candidature';
import { Experience } from 'src/app/models/experience';
import { Formation } from 'src/app/models/formation';
import { Langue } from 'src/app/models/langue';
import { User } from 'src/app/models/user';
import { CandidatService } from 'src/app/services/candidat.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { FormationService } from 'src/app/services/formation.service';
import { LangueService } from 'src/app/services/langue.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  registerFormationData= {} as any;
  registerExperienceData= {} as any;
  registerLangueData= {} as any;
  datenow : Date = new Date();
  ann : number = new Date().getFullYear();
  currentuser : User;
  lescandidats : Candidat[];
  candidatcurr :Candidat;
  closeResult = '';
  formation : Formation;
  lesformations : Formation[];
  lesexperiences : Experience[];
  leslangues : Langue[];
  lescandidatures : Candidature[];
  i : number =0;
  constructor(public us : UserService ,public cs : CandidatService,private modalService: NgbModal ,private formas : FormationService,
    public exps : ExperienceService , public ls:LangueService , public cans : CandidatureService) {
  
    let current_userr_id = parseInt(localStorage.getItem('id'));
    this.us.getUser(current_userr_id).subscribe(
      res  => {this.currentuser = res;
   },  
  error => {alert("Impossible d'afficher les users")}
  ); 
  this.formas.getTousFormation().subscribe(
    data  => {this.lesformations = data;},
    error => {alert("Impossible d'afficher lesformations")}
  );

  this.exps.getTousExperience().subscribe(
    data  => {this.lesexperiences = data;},
    error => {alert("Impossible d'afficher lesexperiences")}
  );

  this.ls.getTousLangue().subscribe(
    data  => {this.leslangues = data;},
    error => {alert("Impossible d'afficher lesexperiences")}
  );

  this.cans.getTousCandidature().subscribe(
    data  => {this.lescandidatures = data;
    for(let candidature of this.lescandidatures){
     console.log(candidature.candidat_id);
     if( this.candidatcurr.id == candidature.candidat_id){
       this.i = this.i +1;
     }

    }},
    error => {alert("Impossible d'afficher lesexperiences")}
  );


  this.cs.getTousCandidat().subscribe(
    res  => {this.lescandidats = res;
      for(let candidat of this.lescandidats){
        if(candidat.user_id == current_userr_id){
          this.cs.getCandidat(candidat.id).subscribe(
            data=>{this.candidatcurr = data ;},
            err => {console.log(err)}
          );
        }

      }   
            
  },
error => {alert("Impossible d'afficher les agents")}
);



   }

  ngOnInit(): void {
  }
  upload(event){
    const elem = event.target;
    console.log(elem.files[0].name);
    const formData = new FormData();
    formData.append('image', elem.files[0]);
  }




  modifierUser(fup: NgForm){
 
    
    let nom = fup.value['nom'];
    let prenom = fup.value['prenom'];
    let tel = fup.value['tel'];
    let email = fup.value['email'];
    let daten = fup.value['daten'];
    let civilite = fup.value['civilite'];

    let codepostal = fup.value['codepostal'];
    let pays = fup.value['pays'];
    let gouvernorat = fup.value['gouvernorat'];
   
  this.currentuser.nom=nom;
  this.currentuser.prenom=prenom;
  this.currentuser.tel=tel;
  this.currentuser.email=email;
  this.currentuser.daten=daten;
  this.currentuser.civilite=civilite;

  this.candidatcurr.codepostal=codepostal;
  this.candidatcurr.pays=pays;
  this.candidatcurr.gouvernorat=gouvernorat;
  this.us.modifierUser(this.currentuser.id,this.currentuser).subscribe();
  this.cs.modifierCandidat(this.candidatcurr.id ,this.candidatcurr).subscribe(
    data => {alert('modification avec succès')},
    error => {alert('erreur de modification'); console.log(this.candidatcurr)});
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

ajouterFormation(){
  this.registerFormationData.candidat = '/api/candidats/'+this.candidatcurr.id ;
  this.formas.ajoutFormation(this.registerFormationData).subscribe(
    data => {alert("Ajout formation validé");location.reload();},
    err => {console.log(this.registerFormationData);console.log(err);alert("ajout formation échoué")}
);
}

deleteFormation(id){
  if (window.confirm('Confirmer la supression')){
    this.formas.supprimerFormation(id).subscribe(
      data => {alert("suppresion avec succès");location.reload()},
      error => {alert('suppression erronée');}
    );
  }

}



ajouterExperience(){
 console.log(this.registerExperienceData);
 this.registerExperienceData.candidat = '/api/candidats/'+this.candidatcurr.id ;
  this.exps.ajoutExperience(this.registerExperienceData).subscribe(
    data => {alert("Ajout expérience validé");location.reload();},
    err => {console.log(this.registerExperienceData);console.log(err);alert("ajout expérience échoué")}
);
}

deleteExperience(id){
  if (window.confirm('Confirmer la supression')){
    this.exps.supprimerExperience(id).subscribe(
      data => {alert("suppresion avec succès");location.reload()},
      error => {alert('suppression erronée');}
    );
  }

}


ajouterLangue(){
  this.registerLangueData.candidat = '/api/candidats/'+this.candidatcurr.id ;
  this.ls.ajoutLangue(this.registerLangueData).subscribe(
    data => {alert("Ajout langue validé");location.reload();},
    err => {console.log(this.registerLangueData);console.log(err);alert("ajout langue échoué")}
);
}

deleteLangue(id){
  if (window.confirm('Confirmer la supression')){
    this.ls.supprimerLangue(id).subscribe(
      data => {alert("suppresion avec succès");location.reload()},
      error => {alert('suppression erronée');}
    );
  }

}

}
