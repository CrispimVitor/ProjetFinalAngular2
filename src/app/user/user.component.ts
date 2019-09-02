import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
utilisateurs: any[];
  utilisateur: User = new User();
  constructor(private utilisateurService: UserService, private appService: AppService) { }

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
      () => {this.locadUtilisateur(); this.utilisateur = new User(); }
    )
  }
  eliminateUtilisateur(utilisateur) {
    this.utilisateurService.deleteUtilisateur(utilisateur.idUtilisateur).subscribe(
      () => {this.locadUtilisateur();},
      error => {console.log(error);}
    )
  }

}
