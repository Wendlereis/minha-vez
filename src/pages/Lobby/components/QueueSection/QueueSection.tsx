import { theme } from '@shared/theme';
import { Typography } from '@shared/components/Typography';
import { Button } from '@shared/components/Button';

import { PlayersTable } from './PlayersTable';
import { Content, TableWrapper } from './styles';
import { QueueSectionProps } from './types';

export function QueueSection({ players }: QueueSectionProps) {
  return (
    <Content>
      <TableWrapper>
        <Typography variant="H3" color={theme.colors.text.heading.dark}>
          Em espera
        </Typography>
        {/* Lobby description */}

        <PlayersTable players={players} />
      </TableWrapper>
      <Button label="Sair da fila" onClick={() => {}} variant="text" />
    </Content>
  );
}
