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
