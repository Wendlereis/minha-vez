export type Gender = 'male' | 'female';

export type Athlete = {
  name: string;
  id: string;
  gender: Gender;
};

export type Lobby = {
  athletes?: Athlete[];
  court?: Athlete[];
  nextGameDate?: string;
};
