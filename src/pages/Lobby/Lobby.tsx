import { Container } from './styles';
import { QueueSection } from './components/QueueSection/QueueSection';
import { CourtsSection } from './components/CourtsSection';

export function Lobby() {
  const playersInQueue = [
    { name: 'Fulano', id: '123' },
    { name: 'Ciclano', id: '1234' },
    { name: 'Beltrano', id: '1923' },
    { name: 'Amigo', id: '1913' },
  ];

  const nextGameDate = '2024-12-16T16:00:00.000Z';

  const courts = [
    [
      { name: 'Breno', id: 'abc1' },
      { name: 'Ciclano', id: 'abc2' },
      { name: 'Beltrano', id: '1bcf' },
      { name: 'Fulano', id: '124d' },
    ],
  ];

  return (
    <Container>
      <CourtsSection courts={courts} />
      <QueueSection players={playersInQueue} nextGameDate={nextGameDate} />
    </Container>
  );
}
