import { Component, OnInit } from '@angular/core';
import { PhaseService } from 'app/services/phase.service';
import { Phase } from 'app/models/phase';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit {
  phases: any[];
  phase: Phase = new Phase();
  constructor(private phaseService: PhaseService) { }

  ngOnInit() {
    this.locadPhase();
  }
  locadPhase() {
    this.phaseService.getAllPhase().subscribe(
      data => {this.phases = data;},
      error => {console.log(error);}
    )
  }
  createPhase() {
    this.phaseService.savePhase(this.phase).subscribe(
      () => {this.locadPhase(); this.phase = new Phase(); }
    )
  }
  eliminatePhase(phase) {
    this.phaseService.deletePhase(phase.idPhase).subscribe(
      () => {this.locadPhase();},
      error => {console.log(error);}
    )
  }

}
