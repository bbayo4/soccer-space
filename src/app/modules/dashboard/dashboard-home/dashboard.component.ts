import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MatchService } from '@shared/services/match.service';
import { CompetitionService } from '@shared/services/competition.service';
import { Imatches, Fixtures, Competition } from '@core/models/matches.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  fixtures$: Observable<Fixtures[]>;
  _competition: Observable<Competition>;
  matches;
  comps;
  data;
  competition;
  matchweek = 'Matchweek ';
  matchdays = [
    { id: 11, name: 'Matchday 11' },
    { id: 12, name: 'Matchday 12' },
    { id: 13, name: 'Matchday 13' },
    { id: 14, name: 'Matchday 14' },
    { id: 15, name: 'Matchday 15' },
    { id: 16, name: 'Matchday 16' },
    { id: 17, name: 'Matchday 17' },
    { id: 18, name: 'Matchday 18' },
    { id: 19, name: 'Matchday 19' },
    { id: 20, name: 'Matchday 20' },
    { id: 21, name: 'Matchday 21' },
    { id: 22, name: 'Matchday 22' },
    { id: 23, name: 'Matchday 23' },
    { id: 24, name: 'Matchday 24' },
    { id: 25, name: 'Matchday 25' },
    { id: 26, name: 'Matchday 26' },
    { id: 27, name: 'Matchday 27' },
    { id: 28, name: 'Matchday 28' },
    { id: 29, name: 'Matchday 29' },
    { id: 30, name: 'Matchday 30' },
  ];
  gridColumns = 2;
  constructor(
    private matchService: MatchService,
    private compService: CompetitionService,
    public router: Router
  ) { }

  ngOnInit() {
    this._competition = this.compService.competition;
    this.compService.loadAllCompetition();
    this._competition.subscribe((item) => {
      this.comps = item;
      this.comps = this.comps.competitions;
      if (this.comps !== undefined){
        this.data = this.comps.filter(e => {
          return (e.area.id === 2072 && e.plan === 'TIER_ONE' && e.code === 'PL') ||
            (e.area.id === 2114 && e.plan === 'TIER_ONE') ||
          (e.area.id === 2088 && e.plan === 'TIER_ONE') || (e.area.id === 2224 && e.plan === 'TIER_ONE');
        });
        console.log('this.matches', this.data);
      }
    });
    // this.matchService.fetchMatches(2021, 11);
    // this.fixtures$ = this.matchService.matches;
    // this.fixtures$.subscribe((item) => {
    //   this.matches = item;
    //   console.log('this.matches', this.matches);
    // });
    // console.log('this.fixtures', this.fixtures$);

    // this.fixtures.subscribe((item) => {
    //   this.matches = item.matches;
    //   this.competition = item.competition;
    //   this.matchweek = 'matchweek ' + (item.filters ? item.filters.matchday : '');

    // });
    // this.getGames(2021, 11);
  }


  getGames(competionId: number, matchdayId: number): void {
    this.matchService.fetchMatches(competionId, matchdayId);
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
