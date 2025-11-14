import { Athlete } from '@shared/types';

export interface PlayersTableProps {
  athletes: Athlete[];
}

export interface RowProps {
  isCurrent: boolean;
}
