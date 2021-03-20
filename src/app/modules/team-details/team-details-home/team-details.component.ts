import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamService } from '@shared/services/teams.service';
import { TeamDetails } from '@core/models/api.model';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  data: TeamDetails;
  players;
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.getTeamDetails();
  }

  getTeamDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id).subscribe((res: TeamDetails) => {
      this.data = res;
      this.players = this.data.squad;
    });
  }

}
