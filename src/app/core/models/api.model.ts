import { Team } from './team.model';
import { Squad } from './squad.model';

export interface ApiRespone {
  standings: Standing[];
  teams: Clubs;
  [unusedProperties: string]: any;

}

export interface Standing {
  stage: string;
  type: string;
  group: string;
  table: Team[];
}

export interface Clubs {
  id: number;
  position: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  shirtNumber: null;
  role: string;
  name: string;
  crestUrl: string;
  address: string;
  website: string;
  email: string;
  founded: string;
  clubColors: string;
  venue: string;
  squad: [];
}
