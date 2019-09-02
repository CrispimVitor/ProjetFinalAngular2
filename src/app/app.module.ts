import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AffaireService } from './services/affaire.service';
import { DocumentService } from './services/document.service';
import { PhaseService } from './services/phase.service';
import { RoleService } from './services/role.service';
import { TacheService } from './services/tache.service';
import { TribunalService } from './services/tribunal.service';
import { UtilisateurService } from './services/utilisateur.service';
import { AppService } from './app.service';
import { LoginComponent } from './login/login.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers : req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

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
    UtilisateurService,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass:XhrInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
