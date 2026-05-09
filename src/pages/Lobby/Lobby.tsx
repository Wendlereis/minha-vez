import { Lobby as LobbyType } from '@shared/types';

import { QueueSection } from './components/QueueSection/QueueSection';
import { CourtsSection } from './components/CourtsSection';
import { Container } from './styles';

interface LobbyProps extends LobbyType {
  onLeave: () => void;
}

export function Lobby({ athletes, court, nextGameDate, onLeave }: LobbyProps) {
  return (
    <Container>
      <CourtsSection court={court ?? []} />
      <QueueSection
        athletes={athletes}
        nextGameDate={nextGameDate}
        onLeave={onLeave}
      />
    </Container>
  );
}
