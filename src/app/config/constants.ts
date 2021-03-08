// Angular Modules
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constants {
  public readonly API_ENDPOINT: string = 'https://apiv2.apifootball.com/?action=';
  public readonly API_MOCK_ENDPOINT: string = 'https://next.json-generator.com/api/json/get';

  public readonly COMPETITION_ENDPOINT: string = 'https://api.football-data.org/v2/';
}
