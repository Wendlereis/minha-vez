import { Gender } from '@shared/types';

import { QueueSection } from './components/QueueSection/QueueSection';
import { CourtsSection } from './components/CourtsSection';
import { Container } from './styles';

export function Lobby() {
  const playersInQueue = [
    { name: 'Fulano', id: '123', gender: 'male' as Gender },
    { name: 'Ciclano', id: '1234', gender: 'male' as Gender },
    { name: 'Beltrana', id: '1923', gender: 'female' as Gender },
    { name: 'Amigo', id: '1913', gender: 'male' as Gender },
  ];

  const nextGameDate = '2024-12-16T16:00:00.000Z';

  const courts = [
    [],
    // [
    //   { name: 'Breno da Silva', id: 'abc1', gender: 'male' as Gender },
    //   {
    //     name: 'Ciclana de Oliveira Souza',
    //     id: 'abc2',
    //     gender: 'female' as Gender,
    //   },
    //   { name: 'Beltrana Pereira', id: '1bcf', gender: 'female' as Gender },
    //   { name: 'Fulano dos Santos', id: '124d', gender: 'male' as Gender },
    // ],
  ];

  return (
    <Container>
      <CourtsSection courts={courts} />
      <QueueSection players={playersInQueue} nextGameDate={nextGameDate} />
    </Container>
  );
}
