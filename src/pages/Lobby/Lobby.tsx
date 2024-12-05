import { Button } from '@shared/components/Button';
import { Typography } from '@shared/components/Typography';
import { theme } from '@shared/theme';
import { PlayersTable } from './components/PlayersTable';
import {
  Container,
  Content,
  Header,
  TableWrapper,
  Image,
  HeaderTitleWrapper,
} from './styles';
import { Card } from '@shared/components/Card';
import { Court } from '@shared/components/Court';

export function Lobby() {
  const playersInQueue = [
    { name: 'Fulano ', current: false },
    { name: 'Ciclano', current: false },
    { name: 'Beltrano', current: true },
  ];

  // TODO - handle 0 and more than 1 court
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
      <Card position="top">
        <Header>
          <Image src="public/assets/logo.png" alt="Minha Vez logo" />
          <HeaderTitleWrapper>
            <Typography variant="H3" color={theme.colors.text.heading.dark}>
              Em quadra
            </Typography>
          </HeaderTitleWrapper>
          {courts.map((court) => (
            <Court>
              {court.map(({ name }) => (
                <Typography>{name}</Typography>
              ))}
            </Court>
          ))}
        </Header>
      </Card>
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
