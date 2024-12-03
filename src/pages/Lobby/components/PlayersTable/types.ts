export interface PlayersTableProps {
  players: { name: string; current: boolean }[];
}

export interface RowProps {
  isCurrent: boolean;
}
