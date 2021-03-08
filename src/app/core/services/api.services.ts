// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Constants } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  API_KEY = '662b41d088505c46f6fa4c25abd9e9b1c786d422396a46560b42cfc7a45eb7e3';

  constructor(
    // Angular Modules
    private http: HttpClient,
    private constants: Constants
  ) { }

  // return teams as an Observable
  public getTeams(): Observable<[]> {
    return this.http.get<[]>(this.constants.API_ENDPOINT + `get_teams&league_id=148&APIkey=${this.API_KEY}`)
      .pipe(
        tap(_ => console.log('fetched teams')),
      catchError(this.handleError<[]>('getTeams', []))
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
