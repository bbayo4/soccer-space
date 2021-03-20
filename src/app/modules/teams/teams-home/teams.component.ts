import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { TeamService } from '@shared/services/teams.service';
import { Teams } from '@core/models/api.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  title = 'EPL';
  data: Teams;
  teams;
  state;
  constructor(
    private teamService: TeamService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.state = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(state => {
        const id = state && state.id;
        if (id){
          this.getTeams(id);
        } else {
          this.getTeams(2021);
        }
      });
  }

  getTeams(id: number): void {
    this.teamService.getTeams(id).subscribe((res: Teams) => {
      this.data = res;
      this.teams = this.data.teams;
      console.log('teams', this.teams);
    });
  }

}
