import { Button } from '@shared/components/Button';
import { GameStartedWrapper, Wrapper } from './styles';
import { useState } from 'react';
import { Typography } from '@shared/components/Typography';

export function Actions() {
  const [gameStarted, setGameStarted] = useState(false);

  function handleGameStart() {
    setGameStarted(true);
  }

  if (!gameStarted) {
    return (
      <Wrapper>
        <Button label="Entrar em quadra" onClick={handleGameStart} />
        <Button label="Voltar para a fila" onClick={() => {}} variant="text" />
      </Wrapper>
    );
  }

  return (
    <GameStartedWrapper>
      <Button label="Finalizar partida" onClick={() => {}} />
      <div>
        <Typography variant="Body2" textAlign="center">
          Finalize a partida ao sair da quadra para dar lugar aos próximos
          atletas.
        </Typography>
        <Typography variant="Body2" textAlign="center">
          Você voltará automaticamente para o fim da fila.
        </Typography>
      </div>
    </GameStartedWrapper>
  );
}
