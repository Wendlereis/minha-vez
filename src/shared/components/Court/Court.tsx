// import { GenderIcon } from '@shared/components/GenderIcon';

import { Player, StyledCard, Text, Wrapper } from './styles';
import { CourtProps } from './types';

export function Court({ court }: CourtProps) {
  return (
    <StyledCard variant="court">
      <Wrapper>
        {court.map(({ id, name }) => (
          <Player key={id}>
            {/* <GenderIcon size="small" /> */}
            <Text>{name}</Text>
          </Player>
        ))}
      </Wrapper>
    </StyledCard>
  );
}
