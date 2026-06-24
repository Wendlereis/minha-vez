export type Gender = 'male' | 'female';

export type Athlete = {
  name: string;
  id: string;
  gender: Gender;
};

export type CourtPlayer = Athlete & {
  status?: 'playing' | 'finishing';
};

export type Lobby = {
  athletes?: Athlete[];
  court?: CourtPlayer[];
  nextGameDate?: string;
};
