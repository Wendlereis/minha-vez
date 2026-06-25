import { Athlete } from '@shared/types';

export type Pages = 'login' | 'queue-preview' | 'lobby' | 'your-turn';

export type PlayerStatus = "pending" | "accepted" | "declined";

export interface PendingPlayer {
  athlete: Athlete;
  status: PlayerStatus;
}
