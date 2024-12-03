import { Typography } from '../../shared/components/Typography';
import { theme } from '../../shared/theme';
import { PlayersTable } from './components/PlayersTable';
import { Container, Content } from './styles';

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
        <Typography variant="H3" color={theme.colors.text.heading.dark}>
          Em espera
        </Typography>{' '}
        <PlayersTable players={players} />
        {/* Leave Queue Action */}
      </Content>
    </Container>
  );
}
