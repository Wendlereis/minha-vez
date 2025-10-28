import { Athlete } from '@shared/types';

type Court = Athlete[];

export interface CourtsSectionProps {
  court: Court;
}
