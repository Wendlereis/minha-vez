import { Container } from './styles';
import { QueueSection } from './components/QueueSection/QueueSection';

export function Lobby() {
  const players = [
    { name: 'Fulano', id: '123' },
    { name: 'Ciclano', id: '1234' },
    { name: 'Beltrano', id: '1923' },
  ];
  return (
    <Container>
      {/* Court Card */}
      <QueueSection players={players} />
    </Container>
  );
}
