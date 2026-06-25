import { GenderIcon } from '../GenderIcon';

import { Player, StyledCard, Text, Wrapper, PlayerInfo, PlayerStatus } from './styles';
import { CourtProps } from './types';

export function Court({ court }: CourtProps) {
  return (
    <StyledCard variant="court">
      <Wrapper>
        {court.map(({ id, name, gender, status }) => (
          <Player key={id}>
            <GenderIcon gender={gender} size="small" />
            <PlayerInfo>
              <Text>{name}</Text>
              {status && status !== 'playing' && (
                <PlayerStatus variant="caption">
                  {status === 'pending' ? '⏳ Aguardando' : status === 'accepted' ? '✅ Aceitou' : status === 'finishing' ? '👋 Saindo...' : '❌ Recusou'}
                </PlayerStatus>
              )}
            </PlayerInfo>
          </Player>
        ))}
      </Wrapper>
    </StyledCard>
  );
}
