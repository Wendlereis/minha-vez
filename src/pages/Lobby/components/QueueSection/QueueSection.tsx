import { Button } from '@shared/components/Button';

import { PlayersTable } from './PlayersTable';
import { Content, TitleWrapper } from './styles';
import { QueueSectionProps } from './types';
import { QueueDisclaimer } from './QueueDisclaimer';
import { Typography } from '@shared/components/Typography';
import { useState } from 'react';
import { ConfirmationDialog } from './PlayersTable/ConfirmationDialog/ConfirmationDialog';

export function QueueSection({ players, nextGameDate }: QueueSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const hasEnoughPlayers = players.length >= 4;

  function onLeaveQueue() {
    setIsDialogOpen(true);
  }

  function onCloseDialog() {
    setIsDialogOpen(false);
  }

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

      <Button label="Sair da fila" onClick={onLeaveQueue} variant="text" />

      <ConfirmationDialog isOpen={isDialogOpen} onClose={onCloseDialog} />
    </Content>
  );
}
