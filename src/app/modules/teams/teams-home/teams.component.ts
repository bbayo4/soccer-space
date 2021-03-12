import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TeamService } from '../../../core/services/teams.service';
import { Teams } from '../../../core/models/api.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  title = 'EPL';
  data: Teams;
  teams;
  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getTeams(2021);
  }

  getTeams(id: number): void {
    this.teamService.getTeams(id).subscribe((res: Teams) => {
      this.data = res;
      this.teams = this.data.teams;
      console.log('games', this.teams);
    });
  }

}
