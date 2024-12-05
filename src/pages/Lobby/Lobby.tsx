import { Button } from '@shared/components/Button';
import { Typography } from '@shared/components/Typography';
import { theme } from '@shared/theme';
import { PlayersTable } from './components/PlayersTable';
import { Container, Content, TableWrapper } from './styles';
import { CourtsSection } from './components/CourtsSection';

export function Lobby() {
  const playersInQueue = [
    { name: 'Fulano ', current: false },
    { name: 'Ciclano', current: false },
    { name: 'Beltrano', current: true },
  ];

  const courts = [
    [
      { name: 'Breno' },
      { name: 'Ciclano' },
      { name: 'Beltrano' },
      { name: 'Fulano' },
    ],
  ];

  return (
    <Container>
      <CourtsSection courts={courts} />
      {/* TODO - Move this to be a section component too */}
      <Content>
        <TableWrapper>
          <Typography variant="H3" color={theme.colors.text.heading.dark}>
            Em espera
          </Typography>
          {/* Lobby description */}

          <PlayersTable players={playersInQueue} />
        </TableWrapper>
        <Button label="Sair da fila" onClick={() => {}} variant="text" />
      </Content>
    </Container>
  );
}
