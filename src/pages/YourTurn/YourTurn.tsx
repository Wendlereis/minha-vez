import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

import { Typography } from '@shared/components/Typography';
import { Court } from '@shared/components/Court';
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
  court?: any[]; // We'll just use any[] here to avoid strict circular imports if not needed
  isPlaying?: boolean;
  userId?: string;
  onSkip: () => void;
  onJoinCourt: () => void;
  onFinishGame: (rejoinQueue: boolean) => void;
};

export function YourTurn({
  game = [],
  court = [],
  isPlaying = false,
  userId,
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
            {isPlaying ? 'Você está jogando com' : `Você vai jogar com (${timeLeft}s)`}
          </Typography>
          <Court court={isPlaying ? court.map(p => ({ 
            ...p, 
            name: p.id === userId ? 'Você' : p.name,
            status: p.status 
          })) : game.map(p => ({ 
            ...p.athlete, 
            name: p.athlete.id === userId ? 'Você' : p.athlete.name,
            status: p.status 
          }))} />
        </CourtWrapper>
      </Content>
      <Actions
        isPlaying={isPlaying}
        myStatus={court.find(p => p.id === userId)?.status}
        onSkip={onSkip}
        onJoinCourt={onJoinCourt}
        onFinishGame={onFinishGame}
      />
    </Container>
  );
}
