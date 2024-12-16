import { Player } from '@shared/types';

type Court = Player[];

export interface CourtsSectionProps {
  courts: Court[];
}
