import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ApiRespone } from '../models/api.model';
import { Squad } from '../models/squad.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private _competitions: Subject<[]> = new BehaviorSubject<[]>([]);
  public readonly competitions: Observable<[]> = this._competitions.asObservable();

  private _teams: Subject<object> = new BehaviorSubject<object>({});
  public readonly teams: Observable<object> = this._teams.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  fetchTeams(leagueId: number) {
    return this.http.get(`${environment.apiURL}competitions/${leagueId}/teams`).subscribe((response: any) => {
      this._competitions.next(response);
    });
  }

  fetchTeamDetails(teamId: number) {
    return this.http.get(`${environment.apiURL}teams/${teamId}`).subscribe((response: ApiRespone) => {
      this._teams.next(response);
    });
  }

}
