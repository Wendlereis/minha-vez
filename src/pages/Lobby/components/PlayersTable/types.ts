import { Player } from '../QueueSection';

export interface PlayersTableProps {
  players: Player[];
}

export interface RowProps {
  isCurrent: boolean;
}
