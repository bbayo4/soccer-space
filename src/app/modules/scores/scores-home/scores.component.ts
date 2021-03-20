import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MatchService } from '@shared/services/match.service';

import { Imatches, Fixtures } from '@core/models/matches.model';
import { IStanding } from '@core/models/standings.model';
import { ScoreService } from '@shared/services/scores.service';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
  providers: [ScoreService]
})

export class ScoresComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'points',
    'playedGames',
    'won',
    'draw',
    'lost',
    'goalsFor',
    'goalsAgainst',
    'goalDifference'
  ];
  gameweek: Imatches;
  table: IStanding;
  state;
  panelOpenState = true;
  fixtures$: Observable<Fixtures[]>;
  constructor(
    private matchService: MatchService,
    private scoreService: ScoreService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  // ngOnInit(): void {
  //   this.panelOpenState = true;
  //   this.matchService.fetchMatches(2021, 11);
  //   this.fixtures$ = this.matchService.matches;
  //   this.fixtures$.subscribe((item) => {
  //     this.data = item;
  //     console.log('this.data', this.data);
  //   });
  //   console.log('this.fixtures', this.fixtures$);
  // }
  ngOnInit() {
    this.state = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(state => {
        const id = state && state.id;
        const matchday = state && state.matchday;
        if (id && matchday) {
          this.getFixtures(id, matchday);
        } else {
          this.getFixtures(2021, 11);
        }
      });
  }

  getFixtures(league, matchday) {
    this.scoreService.getFixtures(league, matchday)
      .subscribe(
        data => this.gameweek = data,
        error => console.log(error)
      );
  }

}
