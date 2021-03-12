// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Teams, TeamDetails } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService{
  constructor(
    private http: HttpClient
  ){}

  // return teams as an Observable
  getTeams(leagueId: number): Observable<Teams> {
    const url = `${environment.apiURL}competitions/${leagueId}/teams`;
    return this.http.get<Teams>(url)
      .pipe(
        tap(_ => console.log('fetched teams')),
      catchError(this.handleError<Teams>('getTeams'))
      );
  }

  /** GET team by id */
  getTeam(id: number): Observable<TeamDetails> {
    const url = `${environment.apiURL}teams/${id}`;
    return this.http.get<TeamDetails>(url).pipe(
      tap(_ => console.log(`fetched team id=${id}`)),
      catchError(this.handleError<TeamDetails>(`getTeam id=${id}`))
    );
  }


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
}
