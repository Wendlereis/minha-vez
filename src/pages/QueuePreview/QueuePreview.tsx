import { Button } from '@shared/components/Button';
import { Card } from '@shared/components/Card';
import { Header } from '@shared/components/Header';
import { PreviewItem } from './components/PreviewItem';
import {
  CenteredText,
  Container,
  Content,
  EmptyStateWrapper,
  Image,
  PreviewContainer,
} from './styles';

interface QueuePreviewProps {
  queueSize: number;
  nextGameDate?: string;
  onJoin: () => void;
}

export function QueuePreview({
  queueSize,
  nextGameDate,
  onJoin,
}: QueuePreviewProps) {
  const isQueueEmpty = queueSize === 0;

  const minutesToWait = nextGameDate
    ? Math.max(
        0,
        Math.round((new Date(nextGameDate).getTime() - Date.now()) / 60000),
      )
    : 0;

  return (
    <Container>
      <Header title="Pronto para o aquecimento?" />
      <Card variant="body">
        <Content>
          {isQueueEmpty ? (
            <>
              <EmptyStateWrapper>
                <Image
                  src="assets/athletes-stretching.webp"
                  alt="Atletas alongando"
                />
                <CenteredText variant="h2" color="text.heading.dark">
                  Você estará na primeira posição da fila!
                </CenteredText>
                <CenteredText>
                  Entre agora e aguarde outros jogadores para formar o próximo
                  grupo.
                </CenteredText>
              </EmptyStateWrapper>
            </>
          ) : (
            <>
              <CenteredText variant="h2" color="text.heading.dark">
                Garanta agora seu lugar na fila
              </CenteredText>
              <PreviewContainer>
                <PreviewItem
                  number={minutesToWait}
                  title="minutos"
                  description="Tempo estimado de espera até o seu próximo jogo"
                />

                <PreviewItem
                  number={queueSize}
                  title="atletas"
                  description="Esperando para jogar"
                />
              </PreviewContainer>
            </>
          )}
          <Button label="Entrar na fila" onClick={onJoin} />
        </Content>
      </Card>
    </Container>
  );
}
