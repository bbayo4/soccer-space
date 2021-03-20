import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { StandingService } from '@shared/services/standing.service';

import { Table } from '@core/models/standings.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() hideForm: boolean;
  @Input() hideLeagueDrop: boolean;

  teams$: Observable<Table[]>;
  state;
  data;
  displayedColumns: string[] = [
    'position',
    'crestUrl',
    'name',
    'points',
    'playedGames',
    'won',
    'draw',
    'lost',
    'goalsFor',
    'goalsAgainst',
    'goalDifference',
    'form'
  ];

  constructor(
    private standingService: StandingService,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (this.hideForm === true) {
      this.displayedColumns = [
        'position',
        'crestUrl',
        'name',
        'points',
        'playedGames',
        'won',
        'draw',
        'lost',
        'goalsFor',
        'goalsAgainst',
        'goalDifference',
      ];
    }
    this.state = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(state => {
        const id = state && state.id;
        if (id) {
          this.getStandings(id);
        } else {
          this.getStandings('PL');
        }
      });
  }

  getStandings(league: string) {
    this.standingService.fetchStandings(league);
    this.teams$ = this.standingService.teams;
    this.teams$.subscribe(team => {
      this.data = team;
      this.data.forEach((element, index) => {
        if (Array.isArray(element.form)){
          return;
        }
        this.data[index].form = element.form && element.form.split(',');
      }, this.data);
    });
  }

}
