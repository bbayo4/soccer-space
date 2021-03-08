// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Constants } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  API_KEY = '662b41d088505c46f6fa4c25abd9e9b1c786d422396a46560b42cfc7a45eb7e3';
  teams = new BehaviorSubject<[]>([]);

  constructor(
    // Angular Modules
    private http: HttpClient,
    private constants: Constants
  ) { }

  public setTeams(team: []) {
    this.teams.next(team);
  }
  // return books as an Observable
  public getTeams(): Observable<[]> {
    // only if length of array is 0, load from server
    if (this.teams.getValue().length === 0) {
      this.loadTeams();
    }

    // return teams for subscription even if the array is yet empty.
    return this.teams.asObservable();
  }

  private loadTeams() {
    return this.http.get(this.constants.API_ENDPOINT + `get_teams&league_id=148&APIkey=${this.API_KEY}`)
      .pipe(
      tap((res: any) => {
        this.teams.next(res);
      })
      );
    // return this.http.get(this.constants.API_ENDPOINT + `get_teams&league_id=148&APIkey=${this.API_KEY}`);
  }

  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }
  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, options);
  }
  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }
  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }
}
