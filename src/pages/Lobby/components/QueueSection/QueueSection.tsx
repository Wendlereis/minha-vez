import { Button } from '@shared/components/Button';

import { PlayersTable } from './PlayersTable';
import { Content, TitleWrapper } from './styles';
import { QueueSectionProps } from './types';
import { QueueDisclaimer } from './QueueDisclaimer';
import { Typography } from '@shared/components/Typography';

export function QueueSection({ players, nextGameDate }: QueueSectionProps) {
  const hasEnoughPlayers = players.length >= 4;

  return (
    <Content>
      <TitleWrapper>
        <Typography variant="h3" color="text.heading.dark">
          Em espera
        </Typography>
        <QueueDisclaimer
          hasEnoughPlayers={hasEnoughPlayers}
          nextGameDate={nextGameDate}
        />
      </TitleWrapper>

      <PlayersTable players={players} />

      <Button label="Sair da fila" onClick={() => {}} variant="text" />
    </Content>
  );
}
