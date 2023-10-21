import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';
import { Candidature } from 'src/app/models/candidature';
import { Entretien } from 'src/app/models/entretien';
import { Offre } from 'src/app/models/offre';
import { CandidatService } from 'src/app/services/candidat.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { EntretienService } from 'src/app/services/entretien.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.scss']
})
export class EntretienComponent implements OnInit {
  lesentretiens : Entretien[];
  lescandidats:Candidat[];
  candidatcurr:Candidat;
  lescandidatures:Candidature[];
  lesoffres : Offre[];
  constructor(public os : OffreService,public cans : CandidatureService ,public cs : CandidatService ,public ens : EntretienService) { 
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

    this.cs.getTousCandidat().subscribe(
      res  => {this.lescandidats = res;
        for(let candidat of this.lescandidats){
          if(candidat.user_id == current_userr_id){
            this.cs.getCandidat(candidat.id).subscribe(
              data=>{this.candidatcurr = data ; console.log(this.candidatcurr)},
              err => {console.log(err)}
            );
          }
  
        }   
              
    },
  error => {alert("Impossible d'afficher les candidats")}
  );


 
  }

  ngOnInit(): void {
  }

}
