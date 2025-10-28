import { Lobby as LobbyType } from '@shared/types';

import { QueueSection } from './components/QueueSection/QueueSection';
import { CourtsSection } from './components/CourtsSection';
import { Container } from './styles';

export function Lobby({ atheletes, court, nextGameDate }: LobbyType) {
  return (
    <Container>
      <CourtsSection court={court ?? []} />
      <QueueSection players={atheletes} nextGameDate={nextGameDate} />
    </Container>
  );
}
