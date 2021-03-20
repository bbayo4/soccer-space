// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Competition } from '@core/models/matches.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private _competition = new BehaviorSubject<Competition>({} as any);
  private dataStore;
  readonly competition = this._competition.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getMatch() {
    return this._competition.asObservable();
  }

  loadAllCompetition() {
    this.http.get<Competition>(`${environment.apiURL}competitions/`).subscribe(
      data => {
        this.dataStore = data;
        this._competition.next(data);
      },
      error => console.log('Could not load todos.')
    );
  }
}
