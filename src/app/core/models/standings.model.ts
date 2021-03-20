
export interface IStanding {
  matchday: number;
  standings: Standing[];
  [unusedProperties: string]: any;
}

export interface Standing {
  stage: string;
  type: string;
  group: string;
  table: Table[];
}

export interface Table {
  position: number;
  team: {
      id: number;
      name: string;
      crestUrl: string;
  };
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
