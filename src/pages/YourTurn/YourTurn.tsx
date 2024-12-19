import { useEffect } from 'react';
import confetti from 'canvas-confetti';

import { Button } from '@shared/components/Button';
import { Typography } from '@shared/components/Typography';
import { Court } from '@shared/components/Court';

import { Actions, Container, Content, CourtWrapper, Image } from './styles';

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
    { name: 'Fulano da Silva', id: '1234' },
    { name: 'Beltrano dos Santos', id: '1214' },
    { name: 'Ciclano de Souza', id: '1224' },
  ];

  useEffect(() => {
    buildConfetti();
  }, []);

  return (
    <Container>
      <Content>
        <Image
          src="public/assets/friends-playing-volley-ball.png"
          alt="Amigos jogando vôlei"
        />
        <Typography variant="h1" color="secondary.dark">
          É a sua vez!
        </Typography>
        <CourtWrapper>
          <Typography variant="h3" color="text.heading.dark">
            Você vai jogar com
          </Typography>
          <Court>
            {players.map((player) => (
              <Typography key={player.id}>{player.name}</Typography>
            ))}
          </Court>
        </CourtWrapper>
      </Content>
      <Actions>
        <Button label="Entrar em quadra" onClick={() => {}} />
        <Button label="Voltar para a fila" onClick={() => {}} variant="text" />
      </Actions>
    </Container>
  );
}
