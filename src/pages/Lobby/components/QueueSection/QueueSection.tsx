import { useState } from 'react';

import { Button } from '@shared/components/Button';
import { Typography } from '@shared/components/Typography';
import { Dialog } from '@shared/components/Dialog';

import { PlayersTable } from './PlayersTable';
import { Content, TitleWrapper } from './styles';
import { QueueSectionProps } from './types';
import { QueueDisclaimer } from './QueueDisclaimer';

export function QueueSection({
  athletes = [],
  nextGameDate,
}: QueueSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const hasEnoughPlayers = athletes?.length >= 4;

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

      <PlayersTable athletes={athletes} />

      <Button
        label="Sair da fila"
        onClick={() => setIsDialogOpen(true)}
        variant="text"
      />

      {isDialogOpen && (
        <Dialog
          title="Vai ficar de fora?"
          subtitle="Você perderá a sua posição atual, mas poderá entrar novamente na
              fila quando quiser."
          actions={[
            { label: 'Sair da fila', onClick: () => setIsDialogOpen(false) },
            {
              label: 'Voltar',
              onClick: () => setIsDialogOpen(false),
              variant: 'text',
            },
          ]}
        />
      )}
    </Content>
  );
}
