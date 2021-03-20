// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '@env/environment';
// import { Match } from '@core/models/api.model';
import { Imatches, Fixtures } from '@core/models/matches.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private _matches: Subject<Array<Fixtures>> = new BehaviorSubject<Array<Fixtures>>([]);
  // private _matches = new BehaviorSubject<Array<Matches>>([]);
  // readonly matches = this._matches.asObservable();
  public readonly matches: Observable<Array<Fixtures>> = this._matches.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getMatch() {
    return this._matches.asObservable();
  }

  getFixtures(leagueId, matchdayId): Observable<Imatches> {
    return this.http.get(`${environment.apiURL}competitions/${leagueId}/matches/?matchday=${matchdayId}`)
      .map(res => res as Imatches);
  }

  fetchMatches(leagueId, matchdayId) {
    this.http.get(`${environment.apiURL}competitions/${leagueId}/matches/?matchday=${matchdayId}`).subscribe(
      (data: Imatches) => {
        this._matches.next(data.matches);
      },
      error => console.log('Could not load todos.')
    );
  }
  // return teams as an Observable
  // public getMatches(leagueId, matchdayId): Observable<Match> {
  //   return this.http.get<Match>(`${environment.apiURL}competitions/${leagueId}/matches/?matchday=${matchdayId}`)
  //     .pipe(
  //       tap(_ => console.log('fetched matches')),
  //       catchError(this.handleError<Match>('getMatches'))
  //     );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
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
