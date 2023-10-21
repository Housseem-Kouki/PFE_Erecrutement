import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalDismissReasons, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { NavbarvComponent } from './navbarv/navbarv.component';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';  
import { OffreService } from '../services/offre.service';
import { Offre } from '../models/offre';
import { AuthService } from '../services/auth.service';
import { CandidatureService } from '../services/candidature.service';
import { User } from '../models/user';
import { stringify } from '@angular/compiler/src/util';
import { UserService } from '../services/user.service';
import { CandidatService } from '../services/candidat.service';
import { Candidat } from '../models/candidat';
import { Candidature } from '../models/candidature';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';



@Component({
  selector: 'app-visiteur',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.scss']
})
export class VisiteurComponent implements OnInit {
   test : Date = new Date();
  
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: {year: number, month: number};
  model: NgbDateStruct;
  private _router: Subscription;
  @ViewChild(NavbarvComponent) navbar: NavbarvComponent;
  lesoffres : Offre[];
  lescandidats :Candidat[];
  loginUserData = {} as any ;
  registerCandidatureData= {} as any ;
  registerUserData = {} as any;
  closeResult = '';

    error : string;
    usercurrent : any;

    candidature :Candidature;
  u:User;
  candidatcurr:Candidat;
  o:Offre;
  current_userr_id : number;
    
    
    
  constructor(public cs:CandidatService ,public us: UserService,public cans: CandidatureService,public os:OffreService, private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) 
  private document: any, private element : ElementRef, public location: Location , private auth :AuthService,private modalService: NgbModal,public httpclient:HttpClient) {
     this.current_userr_id = parseInt(localStorage.getItem('id'));
  

     

     
  }    
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }


  loginUser(){


    this.auth.loginUser(this.loginUserData)
        .subscribe(
            res => {
                console.log(res)
               
                localStorage.setItem('token', res.token)
                localStorage.setItem('id', res.data.id)
            
                this.us.getUser(res.data.id).subscribe(data => {this.usercurrent = data;});
                alert('user user'+res.data.email);
               
                if(res.data.roles == "ROLE_ADMIN"){
                    alert(" WELCOME SI ADMIN "+this.loginUserData.email);
                    this.router.navigate(['/admin']);
                   }else if(res.data.roles == "ROLE_USER"){
                    alert(" WELCOME SI USER ");
                    this.router.navigate(['/candidat']);
                   }else if(res.data.roles == "ROLE_AGENT"){
                    alert(" WELCOME SI RH ");
                    this.router.navigate(['/agentRH']);
                   }
                
                        
            },
            err => { this.error ="verifier votre email et mot de passe" ;}
        )
  }
  
  isWeekend(date: NgbDateStruct) {
  
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;

      
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
      return date.month !== current.month;
  }

  

  ngOnInit() {
    this.os.getTousOffre().subscribe(
      data  => {this.lesoffres = data; console.log(data);},
      error => {alert("Impossible d'afficher les offres")}
    );
    //get candidat current
    this.cs.getTousCandidat().subscribe(
      res  => {this.lescandidats = res; console.log(res); 
        for(let candidat of this.lescandidats){
          if(candidat.user_id == this.current_userr_id){
            this.cs.getCandidat(candidat.id).subscribe(
              data=>{this.candidatcurr = data ; console.log(this.candidatcurr)},
              err => {console.log(err)}
            );
          }
  
        }            
    
    
    
      },
  error => {console.log(error)}
  );
    //tous les offres
    this.os.getTousOffre().subscribe(
      data  => {this.lesoffres = data},
      error => {alert("Impossible d'afficher les offres")}
    );

      let input_group_focus = document.getElementsByClassName('form-control');
      let input_group = document.getElementsByClassName('input-group');
      for (let i = 0; i < input_group.length; i++) {
          input_group[i].children[0].addEventListener('focus', function (){
              input_group[i].classList.add('input-group-focus');
          });
          input_group[i].children[0].addEventListener('blur', function (){
              input_group[i].classList.remove('input-group-focus');
          });
      }

      var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
      
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
          if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
          }else{
              window.document.activeElement.scrollTop = 0;
          }
          this.navbar.sidebarClose();
      });
      this.renderer.listen('window', 'scroll', (event) => {
          const number = window.scrollY;
          if (number > 150 || window.pageYOffset > 150) {
              // add logic
              navbar.classList.remove('navbar-transparent');
          } else {
              // remove logic
              navbar.classList.add('navbar-transparent');
          }
      });
      var ua = window.navigator.userAgent;
      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }
      if (version) {
          var body = document.getElementsByTagName('body')[0];
          body.classList.add('ie-background');

      }

  }

  removeFooter() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(titlee === 'signup' || titlee === 'nucleoicons'){
          return false;
      }
      else {
          return true;
      }
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


  ajoutCandidature(offre_id){

    

      if (localStorage.getItem('token')){
       
        this.registerCandidatureData.statuscan = 'en cours' ;
        this.registerCandidatureData.candidat = '/api/candidats/'+this.candidatcurr.id ;
        this.registerCandidatureData.offre = '/api/offres/'+offre_id ;
        
        this.cans.ajoutCandidature(this.registerCandidatureData).subscribe(
          data => {alert("Candidature envoyé");window.location.href='/candidat/candidatures';},
          err => {console.log(this.registerCandidatureData);console.log(err);alert("ajout candidature échoué")}
        );
       
      }else{
        alert('connecté vous');
      }
      
      
  }


  ajoutUser(){
    this.registerUserData.roles=["ROLE_USER"];
     
      this.auth.registerUser(this.registerUserData).subscribe(
          res => {console.log(res);alert("inscription validé");location.reload();},
          err => {console.log(this.registerUserData);console.log(err);alert("inscription échoué")}
      );


  }



  



}
