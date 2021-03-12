import { Component, OnInit } from '@angular/core';
// import { ApiHttpService } from '../../../core/services/api.services';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MatchService } from '../../../core/services/match.service';
import { Match } from '../../../core/models/api.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  fixtures: Observable<Match>;
  matches;
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

  constructor(
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.fixtures = this.matchService.matches; // subscribe to entire collection
    this.fixtures.subscribe((item) => {
      this.matches = item.matches;
      this.competition = item.competition;
      this.matchweek = 'matchweek ' + (item.filters ? item.filters.matchday : '');
      // console.log('matches', this.matches);
    });
    this.getGames(2021, 11);
  }


  getGames(competionId: number, matchdayId: number): void {
    this.matchService.loadMatchesByLeague(competionId, matchdayId);
    // this.matchService.getMatches(competionId, matchdayId)
    //   .subscribe((match: Match) => {
    //     this.games$ = match;
    //     this.matches = this.games$.matches;
    //     this.matchweek = 'Matchweek ' + this.games$.filters.matchday;
    //     console.log('games', this.games$);
    //   });
  }
}
