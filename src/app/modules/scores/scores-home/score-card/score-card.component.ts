import { Component, OnInit, Input } from '@angular/core';
import { Fixtures } from '@core/models/matches.model';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {
  @Input() fixture: Fixtures;

  constructor() { }

  ngOnInit(): void {
  }

}
