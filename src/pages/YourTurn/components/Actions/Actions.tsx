import { Button } from '@shared/components/Button';
import { Wrapper, GameStartedWrapper, CenteredText, WaitingText } from './styles';

type ActionsProps = {
  isPlaying?: boolean;
  myStatus?: string;
  onSkip: () => void;
  onJoinCourt: () => void;
  onFinishGame: (rejoinQueue: boolean) => void;
};

export function Actions({ isPlaying, myStatus, onSkip, onJoinCourt, onFinishGame }: ActionsProps) {
  if (isPlaying) {
    return (
      <GameStartedWrapper>
        {myStatus === 'playing' ? (
          <>
            <Button label="Finalizar e voltar pra fila" onClick={() => onFinishGame(true)} />
            <Button label="Finalizar e sair" variant="text" onClick={() => onFinishGame(false)} />
            <div>
              <CenteredText variant="body2">
                Finalize a partida ao sair da quadra para dar lugar aos próximos atletas.
              </CenteredText>
            </div>
          </>
        ) : (
          <WaitingText variant="body1" color="secondary.main">
            Aguardando os outros jogadores finalizarem a partida...
          </WaitingText>
        )}
      </GameStartedWrapper>
    );
  }

  return (
    <Wrapper>
      <Button label="Entrar em quadra" onClick={onJoinCourt} />
      <Button label="Voltar para a fila" onClick={onSkip} variant="text" />
    </Wrapper>
  );
}
