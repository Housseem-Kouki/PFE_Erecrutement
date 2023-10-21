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
  selector: 'app-dashboarda',
  templateUrl: './dashboarda.component.html',
  styleUrls: ['./dashboarda.component.scss']
})
export class DashboardaComponent implements OnInit {
  lescandidats : Candidat[];
  nbrcandidats : number = 0;

  lescandidatures : Candidature[];
  nbrcandidatures : number = 0;
  candidaccept : number = 0;
  candidtrefus : number = 0;
  candidcours : number = 0;
 


  lesoffres : Offre[];
  nbroffres : number = 0;
  nbroffresaff : number = 0;
  nbroffresmas : number = 0;

  lesentretiens : Entretien[];
  nbrentretiens : number = 0;
  entenligne : number = 0;  
  entpres: number = 0;
  constructor(public ens:EntretienService,public ofs:OffreService ,public cans : CandidatureService,public cs :CandidatService ) {

  }

  ngOnInit(): void {
    this.cs.getTousCandidat().subscribe(
      data => {this.lescandidats = data;
      for (let candidat of this.lescandidats){
        this.nbrcandidats= this.nbrcandidats +1;
      }}
    );

    
    this.cans.getTousCandidature().subscribe(
      data => {this.lescandidatures = data;
      for (let candidature of this.lescandidatures){
        this.nbrcandidatures= this.nbrcandidatures +1;
        if(candidature.status == 1){
          this.candidaccept = this.candidaccept+1;
        }else if(candidature.status == 0){
          this.candidtrefus = this.candidtrefus +1

        }else{
          this.candidcours = this.candidcours +1;
        }
      }}
    );
  

    this.ofs.getTousOffre().subscribe(
      data => {this.lesoffres = data;
      for (let offre of this.lesoffres){
        this.nbroffres= this.nbroffres +1;
        if(offre.statusoff == 1){
          this.nbroffresaff =this.nbroffresaff +1 ;
        }else if(offre.statusoff == 0){
          this.nbroffresmas =this.nbroffresmas +1 ;
        }
  
      }}
    );

 

    this.ens.getTousEntretien().subscribe(
      data => {this.lesentretiens = data;
      for (let entretien of this.lesentretiens){
        this.nbrentretiens= this.nbrentretiens +1;
        if (entretien.etat === 'En Ligne'){
          this.entenligne = this.entenligne +1 ;     
        }else{
          this.entpres = this.entpres +1 ; 
        }
      }}
    );
  }



  
  }


