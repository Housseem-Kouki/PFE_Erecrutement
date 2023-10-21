import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscritmodal-content',
  template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Inscription</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>

    <form class="register-form" >
    <div class="modal-body">
   

    <div class="form-row">
        <div class="col">
            <label>Nom</label> 
            <div class="input-group form-group-no-border" >
            <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="ni  ni-circle-08"></i>
            </span>
            </div>
            <input type="text" class="form-control" placeholder="Nom"  [(ngModel)]="registerUserData.nom" name="nom">
            </div>
        </div>

        <div class="col">
             <label>Prénom</label> 
             <div class="input-group form-group-no-border" >
             <div class="input-group-prepend">
             <span class="input-group-text">
             <i class="ni  ni-circle-08"></i>
            </span>
            </div>
            <input type="text" class="form-control" placeholder="Prénom" [(ngModel)]="registerUserData.prenom" name="prenom" >
            </div>
        </div>
    
    </div>

    <div class="form-row">
    <div class="col">
        <label>Téléphone</label> 
        <div class="input-group form-group-no-border" >
        <div class="input-group-prepend">
        <span class="input-group-text">
        <i class="ni  ni-tel-08"></i>
        </span>
        </div>
        <input type="number" class="form-control" placeholder="+216"  [(ngModel)]="registerUserData.tel" name="tel">
        </div>
    </div>

    <div class="col">
         <label>civilite</label> 
         <div class="input-group form-group-no-border" >
         <div class="input-group-prepend">
         <span class="input-group-text">
         <i class="ni  ni-circle-08"></i>
        </span>
        </div>
        <input type="text" class="form-control" placeholder="civilite" [(ngModel)]="registerUserData.civilite" name="civilite" >
        </div>
    </div>

</div>


    


    
    
    
    <div class="form-row">
             <div class="col">
                <label>Email</label> 
                <div class="input-group form-group-no-border" >
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="ni ni-email-83"></i>
                        </span>
                    </div>
                <input type="text" class="form-control" placeholder="Email" [(ngModel)]="registerUserData.email" name="email" >
                </div>
            </div>

            <div class="col">
            <label>Date de Naissance</label> 
            <div class="input-group form-group-no-border" >
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fa fa-calendar" ></i>
                        </span>
                    </div>
        <input  type="date" name="daten"  class="form-control" placeholder="yyyy-mm-dd"  [(ngModel)]="registerUserData.daten" >
                </div>

            </div>
    </div>





    <div class="form-row">
    <div class="col">
    <label>Mote de Passe </label>
    <div class="input-group form-group-no-border" >
      <div class="input-group-prepend">
        <span class="input-group-text">
        <i class="ni ni-key-25"></i>
        </span>
      </div>
        <input type="password" class="form-control" name="password" [(ngModel)]="registerUserData.password" placeholder="Mot de Passe" >
    </div>
    </div>

    <div class="col">
    <label>Confirmer Mot de Passe </label>
    <div class="input-group form-group-no-border" >
      <div class="input-group-prepend">
        <span class="input-group-text">
            <i class="ni ni-key-25"></i>
        </span>
      </div>
        <input type="password" class="form-control" placeholder="Mot de Passe" >
    </div>
    </div>


    </div>
   
    

    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="submit" class="btn btn-default btn-link" (click)="ajoutUser()">S'inscrire</button>
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

  registerUserData = {} as any;

  constructor(public activeModal: NgbActiveModal , private auth:AuthService ,private router: Router) {}
  ajoutUser(){
    this.registerUserData.roles=["ROLE_USER"];
     
      this.auth.registerUser(this.registerUserData).subscribe(
          res => {console.log(res);alert("inscription validé");location.reload();},
          err => {console.log(this.registerUserData);console.log(err);alert("inscription échoué")}
      );


  }
}

@Component({
  selector: 'app-inscritmodal-component',
  templateUrl: './inscritmodal.component.html'
})

export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}
  open() {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
  }
}
