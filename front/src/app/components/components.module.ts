import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavabarcComponent } from './navabarc/navabarc.component';
import { FooetrcComponent } from './fooetrc/fooetrc.component';
import { SidebarcComponent } from './sidebarc/sidebarc.component';
import { FooteraComponent } from './footera/footera.component';
import { NavbaraComponent } from './navbara/navbara.component';
import { SidebaraComponent } from './sidebara/sidebara.component';
import { NavbarrhComponent } from './navbarrh/navbarrh.component';
import { FooterrhComponent } from './footerrh/footerrh.component';
import { SidebarrhComponent } from './sidebarrh/sidebarrh.component';
import { AuthService } from '../services/auth.service';



@NgModule({
  declarations: [
    NavabarcComponent,
    FooetrcComponent,
    SidebarcComponent,
    FooteraComponent,
    NavbaraComponent,
    SidebaraComponent,
    NavbarrhComponent,
    FooterrhComponent,
    SidebarrhComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    
  ],
  exports: [
    NavabarcComponent,
    FooetrcComponent,
    SidebarcComponent,
    FooteraComponent,
    NavbaraComponent,
    SidebaraComponent,
    NavbarrhComponent,
    FooterrhComponent,
    SidebarrhComponent
    
      ],
      providers: [
        AuthService 
        ]
})
export class ComponentsModule { }
