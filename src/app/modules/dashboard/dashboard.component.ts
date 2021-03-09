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

  constructor(
    private teamService: TeamService,
    private apiService: ApiHttpService
  ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.apiService.getMatches(2021)
      .subscribe((matches: any) => {
        this.matches = matches.matches;
        console.log('matches', this.matches);
      });
  }
}
