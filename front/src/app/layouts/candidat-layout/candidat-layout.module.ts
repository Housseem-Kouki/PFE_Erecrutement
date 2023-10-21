import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/pagesCandidat/dashboard/dashboard.component';
import { EntretienComponent } from 'src/app/pagesCandidat/entretien/entretien.component';

import { CandidaturesComponent } from 'src/app/pagesCandidat/candidatures/candidatures.component';
import { UserProfileComponent } from 'src/app/pagesCandidat/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';
import { CandidatLayoutRoutes } from './candidat-layout.routing';



@NgModule({
  declarations: [
    DashboardComponent,
    EntretienComponent,
    CandidaturesComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CandidatLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ]
})
export class CandidatLayoutModule { }
