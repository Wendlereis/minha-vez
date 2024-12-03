import { Button } from '@shared/components/Button';
import { Typography } from '@shared/components/Typography';
import { theme } from '@shared/theme';
import { PlayersTable } from './components/PlayersTable';
import { Container, Content, TableWrapper } from './styles';

export function Lobby() {
  const players = [
    { name: 'Fulano', current: false },
    { name: 'Ciclano', current: false },
    { name: 'Beltrano', current: true },
  ];
  return (
    <Container>
      {/* Court Card */}
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
    </Container>
  );
}
