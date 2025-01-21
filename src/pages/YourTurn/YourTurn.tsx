import { useEffect } from 'react';
import confetti from 'canvas-confetti';

import { Typography } from '@shared/components/Typography';
import { Court } from '@shared/components/Court';
import { Gender } from '@shared/types';

import { Actions } from './components/Actions';
import { Container, Content, CourtWrapper, Image } from './styles';

function buildConfetti() {
  const commonFields = {
    particleCount: 160,
    spread: 120,
    colors: ['#F78710', '#FF4D00', '#FFC37E'],
  };

  confetti({
    ...commonFields,
    origin: { x: 1, y: 0.6 },
  });

  confetti({
    ...commonFields,
    origin: { x: 0, y: 1 },
  });
}

export function YourTurn() {
  const players = [
    { name: 'Fulano da Silva', id: '1234', gender: 'male' as Gender },
    {
      name: 'Beltrano dos Santos Silva',
      id: '1214',
      gender: 'male' as Gender,
    },
    { name: 'Ciclano de Souza', id: '1224', gender: 'male' as Gender },
  ];

  useEffect(() => {
    buildConfetti();
  }, []);

  return (
    <Container>
      <Content>
        <Image
          src="assets/athletes-playing-beach-tennis.webp"
          alt="Atletas jogando beach tennis"
        />
        <Typography variant="display" color="secondary.dark">
          É a sua vez!
        </Typography>
        <CourtWrapper>
          <Typography variant="h3" color="text.heading.dark">
            Você vai jogar com
          </Typography>
          <Court court={players} />
        </CourtWrapper>
      </Content>
      <Actions />
    </Container>
  );
}
