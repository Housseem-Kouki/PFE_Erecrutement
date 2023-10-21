import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
;
import { VisiteurModule } from './visiteur/visiteur.module';
import { CandidatLayoutComponent } from './layouts/candidat-layout/candidat-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AgentRHLayoutComponent } from './layouts/agent-rh-layout/agent-rh-layout.component';

import { ComponentsModule } from './components/components.module';

import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';









@NgModule({
  declarations: [
    AppComponent,
    CandidatLayoutComponent,
    AdminLayoutComponent,
    AgentRHLayoutComponent,
    
    
    
 
    
    
  
    
    
   
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VisiteurModule,
    ComponentsModule,
    HttpClientModule,
  
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
