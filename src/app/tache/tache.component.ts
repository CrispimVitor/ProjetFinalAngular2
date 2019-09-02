import { Component, OnInit } from '@angular/core';
import { Tache } from 'app/models/tache';
import { TacheService } from 'app/services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  taches: any[];
  tache: Tache = new Tache();
  constructor(private tacheService: TacheService) { }

  ngOnInit() {
    this.locadTache();
  }
  locadTache() {
    this.tacheService.getAllTache().subscribe(
      data => {this.taches = data;},
      error => {console.log(error);}
    )
  }
  createTache() {
    this.tacheService.saveTache(this.tache).subscribe(
      () => {this.locadTache(); this.tache = new Tache(); }
    )
  }
  eliminateTache(tache) {
    this.tacheService.deleteTache(tache.idTache).subscribe(
      () => {this.locadTache();},
      error => {console.log(error);}
    )
  }

}
