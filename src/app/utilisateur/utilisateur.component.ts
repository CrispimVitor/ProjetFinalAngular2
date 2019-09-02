import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/models/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs: any[];
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private utilisateurService: UtilisateurService, private appService: AppService) { }

  authenticated() {
    return this.appService.authenticated;
  }

  ngOnInit() {
    this.locadUtilisateur();
  }
  locadUtilisateur() {
    this.utilisateurService.getAllUtilisateur().subscribe(
      data => {this.utilisateurs = data;},
      error => {console.log(error);}
    )
  }
  createUtilisateur() {
    this.utilisateurService.saveUtilisateur(this.utilisateur).subscribe(
      () => {this.locadUtilisateur(); this.utilisateur = new Utilisateur(); }
    )
  }
  eliminateUtilisateur(utilisateur) {
    this.utilisateurService.deleteUtilisateur(utilisateur.idUtilisateur).subscribe(
      () => {this.locadUtilisateur();},
      error => {console.log(error);}
    )
  }

}
