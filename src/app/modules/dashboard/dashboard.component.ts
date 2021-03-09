import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../core/services/teams.service';
import { Observable } from 'rxjs';
import { ApiHttpService } from '../../core/services/api.services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  matches: Observable<[]>;
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
  competition;
  matchweek = 'Matchweek 11';
  constructor(
    private teamService: TeamService,
    private apiService: ApiHttpService
  ) { }

  ngOnInit() {
    this.getMatches();
  }

  getMatches(): void {
    this.apiService.getMatches(2021, 11)
      .subscribe((matches: any) => {
        this.matches = matches.matches;
        this.competition = matches.competition;
        console.log('matches', this.matches);
      });
  }

  getMatchday(competionId: number, matchdayId: number) {
    this.apiService.getMatches(competionId, matchdayId).subscribe((matches: any) => {
      this.matches = matches.matches;
      this.matchweek = 'Matchweek ' + matches.filters.matchday;
      console.log('matches', this.matches);
    });
  }
}
