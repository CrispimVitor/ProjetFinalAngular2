import { Component, OnInit } from '@angular/core';
import { Tribunal } from 'app/models/tribunal';
import { TribunalService } from 'app/services/tribunal.service';

@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.scss']
})
export class TribunalComponent implements OnInit {
  tribunals: any[];
  tribunal: Tribunal = new Tribunal();
  constructor(private tribunalService: TribunalService) { }

  ngOnInit() {
    this.locadTribunal();
  }
  locadTribunal() {
    this.tribunalService.getAllTribunal().subscribe(
      data => {this.tribunals = data;},
      error => {console.log(error);}
    )
  }
  createTribunal() {
    this.tribunalService.saveTribunal(this.tribunal).subscribe(
      () => {this.locadTribunal(); this.tribunal = new Tribunal(); }
    )
  }
  eliminateTribunal(tribunal) {
    this.tribunalService.deleteTribunal(tribunal.idTribunal).subscribe(
      () => {this.locadTribunal();},
      error => {console.log(error);}
    )
  }

}
