import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisiteurComponent } from './visiteur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { NavbarvComponent } from './navbarv/navbarv.component';
import { FootervComponent } from './footerv/footerv.component';
import {  NgbdModalComponent, NgbdModalContent } from './inscritmodal/inscritmodal.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../auth.guard';
import { CarousselmodalComponent } from './carousselmodal/carousselmodal.component';





@NgModule({
  declarations: [
    VisiteurComponent,
    NavbarvComponent,
    FootervComponent,
    NgbdModalComponent,
    NgbdModalContent,
    CarousselmodalComponent,   
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    HttpClientModule
  ],
  entryComponents: [NgbdModalContent],
  exports:[ VisiteurComponent ],
  providers: [
  AuthService ,AuthGuard
  ]
})
export class VisiteurModule { }
