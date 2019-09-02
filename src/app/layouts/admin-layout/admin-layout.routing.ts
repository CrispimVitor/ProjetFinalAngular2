import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AffaireComponent } from 'app/affaire/affaire.component';
import { DocumentComponent } from 'app/document/document.component';
import { PhaseComponent } from 'app/phase/phase.component';
import { RoleComponent } from 'app/role/role.component';
import { TacheComponent } from 'app/tache/tache.component';
import { TribunalComponent } from 'app/tribunal/tribunal.component';
import { LoginComponent } from 'app/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'affaire',        component: AffaireComponent },
    { path: 'document',       component: DocumentComponent },
    { path: 'phase',          component: PhaseComponent },
    { path: 'role',           component: RoleComponent },
    { path: 'tache',          component: TacheComponent },
    { path: 'tribunal',       component: TribunalComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'login',          component: LoginComponent },
];
