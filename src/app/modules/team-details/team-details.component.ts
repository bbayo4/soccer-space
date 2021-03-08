import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../core/services/teams.service';
import { Squad } from '../../core/models/squad.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  data;
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
    this.teamService.fetchTeamDetails(id);
    this.teamService.teams.subscribe(val => {
      this.data = val;
      this.players = this.data.squad;
    });
  }

}
