export type Gender = 'male' | 'female';

export type Athlete = {
  name: string;
  id: string;
  // gender: Gender;
};

export type Lobby = {
  atheletes?: Athlete[];
  court?: Athlete[];
  nextGameDate?: string;
};
