import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AgentRHLayoutComponent } from './layouts/agent-rh-layout/agent-rh-layout.component';
import { CandidatLayoutComponent } from './layouts/candidat-layout/candidat-layout.component';






import { VisiteurComponent } from './visiteur/visiteur.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'visiteur',
    pathMatch: 'full',
  }, {
    path: 'candidat',
    component: CandidatLayoutComponent, canActivate:[AuthGuard],
    
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/candidat-layout/candidat-layout.module').then(m => m.CandidatLayoutModule)
      }
    ]
  }, {
    path: 'admin',
    component: AdminLayoutComponent, canActivate:[AuthGuard],
    children: [
      {
        path: '',
        loadChildren:() => import('./layouts/admin-layout/admin-layouts.module').then(m => m.AdminLayoutsModule)
      }
    ]
  }
  , {
    path: 'agentRH',
    component: AgentRHLayoutComponent, canActivate:[AuthGuard],
    children: [
      {
        path: '',
        loadChildren:() => import('./layouts/agent-rh-layout/agent-rh-layout.module').then(m => m.AgentRhLayoutModule)
      }
    ]
  },
  {
    path: 'visiteur',
    component: VisiteurComponent
    
  }
];



@NgModule({
  imports: [ 
    CommonModule,
    BrowserModule, 
    RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
