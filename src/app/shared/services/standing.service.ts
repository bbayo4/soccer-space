import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { IStanding, Table } from '@core/models/standings.model';

@Injectable({
  providedIn: 'root'
})
export class StandingService {
  private _teams: Subject<Array<Table>> = new BehaviorSubject<Array<Table>>([]);
  public readonly teams: Observable<Array<Table>> = this._teams.asObservable();

  private readonly leagues = {
    BL1: 'BL1',
    PL: 'PL',
    SA: 'SA',
    PD: 'PD'
  };

  constructor(private http: HttpClient) { }

  fetchStandings(league: string) {
    this.http.get(`${environment.apiURL}competitions/${this.leagues[league]}/standings`).subscribe((response: IStanding) => {
      this._teams.next(response.standings[0].table);
    });
  }
}
