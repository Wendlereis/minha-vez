import { Typography } from '../Typography';
import { Wrapper } from './styles';
import { CourtProps } from './types';

export function Court({ players }: CourtProps) {
  return (
    <Wrapper>
      {players.map(({ name }) => (
        <Typography>{name}</Typography>
      ))}
    </Wrapper>
  );
}
