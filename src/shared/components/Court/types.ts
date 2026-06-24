import { Athlete } from '@shared/types';

export type CourtAthlete = Athlete & {
  status?: "pending" | "accepted" | "declined" | "playing" | "finishing";
};

export interface CourtProps {
  court: CourtAthlete[];
}
