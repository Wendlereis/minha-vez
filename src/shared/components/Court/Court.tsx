import { GenderIcon } from '@shared/components/GenderIcon';

import { Player, StyledCard, Text, Wrapper } from './styles';
import { CourtProps } from './types';

export function Court({ court }: CourtProps) {
  return (
    <StyledCard variant="court">
      <Wrapper>
        {court.map(({ id, name, gender, status }) => (
          <Player key={id}>
            <GenderIcon gender={gender} size="small" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Text>{name}</Text>
              {status && status !== 'playing' && (
                <span style={{ fontSize: '10px', color: '#666', marginTop: '-4px' }}>
                  {status === 'pending' ? '⏳ Aguardando' : status === 'accepted' ? '✅ Aceitou' : status === 'finishing' ? '👋 Saindo...' : '❌ Recusou'}
                </span>
              )}
            </div>
          </Player>
        ))}
      </Wrapper>
    </StyledCard>
  );
}
