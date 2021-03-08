import { Component, OnInit } from '@angular/core';

import { ApiHttpService } from '../../core/services/api.services';
import { DataTransferService } from '../../core/services/data-transfer.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  title = 'EPL';
  teams = [];

  constructor(
    private apiService: ApiHttpService,
    private data: DataTransferService
  ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.apiService.getTeams().subscribe((data) => {
      this.teams = data;
      this.teams.sort((a, b) => a.team_name.localeCompare(b.team_name));
      this.data.setData(this.teams);
    });
  }

}
