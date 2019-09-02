import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AffaireComponent } from './affaire/affaire.component';
import { DocumentComponent } from './document/document.component';
import { PhaseComponent } from './phase/phase.component';
import { RoleComponent } from './role/role.component';
import { TacheComponent } from './tache/tache.component';
import { TribunalComponent } from './tribunal/tribunal.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AffaireService } from './services/affaire.service';
import { DocumentService } from './services/document.service';
import { PhaseService } from './services/phase.service';
import { RoleService } from './services/role.service';
import { TacheService } from './services/tache.service';
import { TribunalService } from './services/tribunal.service';
import { UtilisateurService } from './services/utilisateur.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [
    AffaireService, 
    DocumentService, 
    PhaseService, 
    RoleService, 
    TacheService, 
    TribunalService, 
    UtilisateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
