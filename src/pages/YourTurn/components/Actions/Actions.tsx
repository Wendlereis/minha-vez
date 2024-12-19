import { Button } from '@shared/components/Button';
import { CenteredText, GameStartedWrapper, Wrapper } from './styles';
import { useState } from 'react';

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
        <CenteredText variant="body2">
          Finalize a partida ao sair da quadra para dar lugar aos próximos
          atletas.
        </CenteredText>
        <CenteredText variant="body2">
          Você voltará automaticamente para o fim da fila.
        </CenteredText>
      </div>
    </GameStartedWrapper>
  );
}
