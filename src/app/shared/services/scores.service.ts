import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '@env/environment';
import { Imatches } from '@core/models/matches.model';
import { IStanding } from '@core/models/standings.model';

@Injectable()
export class ScoreService {

  private readonly leagues = {
    BL1: 'BL1',
    PL: 'PL',
    SA: 'SA',
    PD: 'PD'
  };

  constructor(private http: HttpClient) { }

  getTable(league: string): Observable<IStanding> {
    return this.http.get(`${environment.apiURL}competitions/${this.leagues[league]}/standings`).map(res => res as IStanding);
  }

  getFixtures(leagueId: number, matchDay: number): Observable<Imatches> {
    return this.http.get(`${environment.apiURL}competitions/${leagueId}/matches/?matchday=${matchDay}`)
      .map(res => res as Imatches);
  }

}
