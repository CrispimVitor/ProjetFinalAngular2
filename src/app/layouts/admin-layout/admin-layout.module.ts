import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UtilisateurComponent } from 'app/utilisateur/utilisateur.component';
import { AffaireComponent } from 'app/affaire/affaire.component';
import { DocumentComponent } from 'app/document/document.component';
import { PhaseComponent } from 'app/phase/phase.component';
import { RoleComponent } from 'app/role/role.component';
import { TacheComponent } from 'app/tache/tache.component';
import { TribunalComponent } from 'app/tribunal/tribunal.component';
import { LoginComponent } from 'app/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UtilisateurComponent,
    AffaireComponent,
    DocumentComponent,
    PhaseComponent,
    RoleComponent,
    TacheComponent,
    TribunalComponent,
    LoginComponent
  ]
})

export class AdminLayoutModule {}
