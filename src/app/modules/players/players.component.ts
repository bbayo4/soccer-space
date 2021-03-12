import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PlayersComponent implements OnInit, OnChanges {
  @Input() players;
  // doesDataExist = false;
  columnsToDisplay = ['name', 'position', 'nationality', 'role'];
  expandedElement: PlayerElement | null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    // Check if the data exists before using it
    // if (this.players) {
    //   this.doesDataExist = true;
    // }
  }

  getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}

export interface PlayerElement {
  name: string;
  position: number;
  nationality: number;
  role: string;
}
