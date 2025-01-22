import { GenderIcon } from '@shared/components/GenderIcon';

import { Player, StyledCard, Text, Wrapper } from './styles';
import { CourtProps } from './types';

export function Court({ court }: CourtProps) {
  return (
    <StyledCard variant="court">
      <Wrapper>
        {court.map(({ id, name, gender }) => (
          <Player key={id}>
            <GenderIcon gender={gender} size="small" />
            <Text>{name}</Text>
          </Player>
        ))}
      </Wrapper>
    </StyledCard>
  );
}
