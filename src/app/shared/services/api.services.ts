// // Angular Modules
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

// import { environment } from '@env/environment';
// import { Match } from '@core/models/api.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiHttpService{

//   constructor(
//     private http: HttpClient
//   ) {}
//   // return teams as an Observable
//   public getMatches(leagueId, matchdayId): Observable<Match> {
//     return this.http.get<Match>(`${environment.apiURL}competitions/${leagueId}/matches/?matchday=${matchdayId}`)
//       .pipe(
//         tap(_ => console.log('fetched matches')),
//       catchError(this.handleError<Match>('getMatches'))
//       );
//   }

//   /**
//    * Handle Http operation that failed.
//    * Let the app continue.
//    * @param operation - name of the operation that failed
//    * @param result - optional value to return as the observable result
//    */
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead

//       // TODO: better job of transforming error for user consumption
//       console.log(`${operation} failed: ${error.message}`);

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }

//   public get(url: string, options?: any) {
//     return this.http.get(url, options);
//   }
//   public post(url: string, data: any, options?: any) {
//     return this.http.post(url, data, options);
//   }
//   public put(url: string, data: any, options?: any) {
//     return this.http.put(url, data, options);
//   }
//   public delete(url: string, options?: any) {
//     return this.http.delete(url, options);
//   }
// }
