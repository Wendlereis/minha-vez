import { Athlete } from '@shared/types';

export interface PlayersTableProps {
  players: Athlete[];
}

export interface RowProps {
  isCurrent: boolean;
}
