import { Player } from '@shared/types';

export interface PlayersTableProps {
  players: Player[];
}

export interface RowProps {
  isCurrent: boolean;
}
