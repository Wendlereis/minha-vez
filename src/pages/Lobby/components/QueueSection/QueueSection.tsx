import { theme } from '@shared/theme';
import { Button } from '@shared/components/Button';

import { PlayersTable } from '../PlayersTable';
import { Content, TableWrapper, Title } from './styles';
import { QueueSectionProps } from './types';
import { QueueDisclaimer } from './QueueDisclaimer';

export function QueueSection({ players, nextGameDate }: QueueSectionProps) {
  const hasEnoughPlayers = players.length >= 4;

  return (
    <Content>
      <TableWrapper>
        <div>
          <Title variant="H3" color={theme.colors.text.heading.dark}>
            Em espera
          </Title>
          <QueueDisclaimer
            hasEnoughPlayers={hasEnoughPlayers}
            nextGameDate={nextGameDate}
          />
        </div>

        <PlayersTable players={players} />
      </TableWrapper>
      <Button label="Sair da fila" onClick={() => {}} variant="text" />
    </Content>
  );
}
