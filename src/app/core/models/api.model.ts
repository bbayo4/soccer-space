import { Team } from './team.model';
import { Squad } from './squad.model';
import { Competition } from './competition.model';
import { Matches } from './matches.model';

export interface ApiRespone {
  standings: Standing[];
  teams: Clubs;
  [unusedProperties: string]: any;

}

// interface to get teams in a competion
export interface Teams {
  count: number;
  filters: any;
  competition: any;
  season: any;
  teams: Team[];
}

export interface TeamDetails {
  id: number;
  area: {
    id: number,
    name: string
  };
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
  squad: Squad[];
}

// interface to get matches in a competion
export interface Match{
  filters?: any;
  competition?: Competition;
  matches: Matches[];
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
  squad: Squad[];
}
