export interface Matches {
  id: number;
  season: {
    id: number,
    startDate: string,
    endDate: string,
    currentMatchday: number
  };
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: string;
  score: {
    winner: string;
    duration: string;
    fullTime: {
      homeTeam: number,
      awayTeam: number
    },
    halfTime: {
      homeTeam: number,
      awayTeam: number
    }
  };
  homeTeam: {
    id: number,
    name: string
  };
  awayTeam: {
    id: number,
    name: string
  };
}

