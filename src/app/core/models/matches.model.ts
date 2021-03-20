export class Imatches {
  count: number;
  competition?: Competition;
  matches: Fixtures[];
  [unusedProperties: string]: any;
}

// export interface Fixtures {
//   count: number;
//   competition?: Competition;
//   matches: Matches[];
// }

export interface Competition {
  id: number;
  area: {
    id: number;
    name: string
  };
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
}

export interface Fixtures{
  id: number;
  awayTeam: {
    id: number,
    name: string
  };
  homeTeam: {
    id: number,
    name: string
  };
  lastUpdated: string;
  matchday: number;
  season: {
    id: number,
    startDate: string,
    endDate: string,
    currentMatchday: number
  };
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
  stage: string;
  status: string;
  utcDate: string;
}
// export interface Matches {
//   id: number;
//   season: {
//     id: number,
//     startDate: string,
//     endDate: string,
//     currentMatchday: number
//   };
//   utcDate: string;
//   status: string;
//   matchday: number;
//   stage: string;
//   group: string;
//   lastUpdated: string;
//   score: {
//     winner: string;
//     duration: string;
//     fullTime: {
//       homeTeam: number,
//       awayTeam: number
//     },
//     halfTime: {
//       homeTeam: number,
//       awayTeam: number
//     }
//   };
//   homeTeam: {
//     id: number,
//     name: string
//   };
//   awayTeam: {
//     id: number,
//     name: string
//   };
// }

