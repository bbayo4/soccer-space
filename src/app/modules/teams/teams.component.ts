import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../core/services/teams.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  title = 'EPL';
  teams: Observable<[]>;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.fetchTeams(2021);
    this.teamService.competitions.subscribe((res: any) => {
      this.teams = res.teams;
    });
  }

  getClubs(leagueId: number) {
    this.teamService.fetchTeams(leagueId);
  }

}
