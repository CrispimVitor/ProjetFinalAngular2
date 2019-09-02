import { Component, OnInit } from '@angular/core';
import { AffaireService } from 'app/services/affaire.service';
import { Affaire } from 'app/models/affaire';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.scss']
})
export class AffaireComponent implements OnInit {
  affaires: any[];
  affaire: Affaire = new Affaire();
  constructor(private affaireService: AffaireService) { }

  ngOnInit() {
    this.locadAffaire();
  }
  locadAffaire() {
    this.affaireService.getAllAffaire().subscribe(
      data => {this.affaires = data;},
      error => {console.log(error);}
    )
  }
  createAffaire() {
    this.affaireService.saveAffaire(this.affaire).subscribe(
      () => {this.locadAffaire(); this.affaire = new Affaire(); }
    )
  }
  eliminateAffaire(affaire) {
    this.affaireService.deleteAffaire(affaire.idAffaire).subscribe(
      () => {this.locadAffaire();},
      error => {console.log(error);}
    )
  }

}
