import { Button } from '@shared/components/Button';
import { CenteredText, GameStartedWrapper, Wrapper } from './styles';
import { useState } from 'react';

type ActionsProps = {
  onSkip: () => void;
  onJoinCourt: () => void;
  onFinishGame: (rejoinQueue: boolean) => void;
};

export function Actions({ onSkip, onJoinCourt, onFinishGame }: ActionsProps) {
  const [gameStarted, setGameStarted] = useState(false);

  function handleJoinCourt() {
    onJoinCourt();
    setGameStarted(true);
  }

  if (!gameStarted) {
    return (
      <Wrapper>
        <Button label="Entrar em quadra" onClick={handleJoinCourt} />
        <Button label="Voltar para a fila" onClick={onSkip} variant="text" />
      </Wrapper>
    );
  }

  return (
    <GameStartedWrapper>
      <Button label="Finalizar e voltar pra fila" onClick={() => onFinishGame(true)} />
      <Button label="Finalizar e sair" variant="text" onClick={() => onFinishGame(false)} />
      <div>
        <CenteredText variant="body2">
          Finalize a partida ao sair da quadra para dar lugar aos próximos
          atletas.
        </CenteredText>
      </div>
    </GameStartedWrapper>
  );
}
