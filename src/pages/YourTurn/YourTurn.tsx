import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

import { Typography } from '@shared/components/Typography';
import { PendingPlayer } from '../../types';

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

type YourTurnProps = {
  game?: PendingPlayer[];
  onSkip: () => void;
  onJoinCourt: () => void;
  onFinishGame: (rejoinQueue: boolean) => void;
};

export function YourTurn({
  game = [],
  onSkip,
  onJoinCourt,
  onFinishGame,
}: YourTurnProps) {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    buildConfetti();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

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
            Você vai jogar com ({timeLeft}s)
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            {game.map((p) => (
              <div key={p.athlete.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" color="text.body.dark">{p.athlete.name}</Typography>
                <Typography variant="body2" color="text.body.dark">
                  {p.status === 'pending' ? '⏳ Aguardando' : p.status === 'accepted' ? '✅ Aceitou' : '❌ Recusou'}
                </Typography>
              </div>
            ))}
          </div>
        </CourtWrapper>
      </Content>
      <Actions
        onSkip={onSkip}
        onJoinCourt={onJoinCourt}
        onFinishGame={onFinishGame}
      />
    </Container>
  );
}
