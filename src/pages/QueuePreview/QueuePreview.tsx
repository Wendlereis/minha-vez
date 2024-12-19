import { Button } from '@shared/components/Button';
import { Card } from '@shared/components/Card';
import { Header } from '@shared/components/Header';
import { PreviewItem } from './components/PreviewItem';
import {
  CenteredText,
  Container,
  Content,
  PreviewContainer,
  Image,
  TitleWrapper,
} from './styles';

export function QueuePreview() {
  const isQueueEmpty = true;

  return (
    <Container>
      <Header title="Pronto para o aquecimento?" />
      <Card variant="body">
        <Content>
          {isQueueEmpty ? (
            <>
              <TitleWrapper>
                <CenteredText variant="h2" color="text.heading.dark">
                  Você estará na primeira posição da fila!
                </CenteredText>
                <CenteredText>
                  Entre agora e aguarde outros jogadores para formar o próximo
                  grupo.
                </CenteredText>
              </TitleWrapper>
              <Image
                src="public/assets/girls-playing-beach-tennis.png"
                alt="Garotas jogando Beach Tennis"
              />
            </>
          ) : (
            <>
              <CenteredText variant="h2" color="text.heading.dark">
                Garanta agora seu lugar na fila
              </CenteredText>
              <PreviewContainer>
                <PreviewItem
                  number={45}
                  title="minutos"
                  description="Tempo estimado de espera até o seu próximo jogo"
                />

                <PreviewItem
                  number={12}
                  title="atletas"
                  description="Esperando para jogar"
                />
              </PreviewContainer>
            </>
          )}
          <Button label="Entrar na fila" onClick={() => {}} />
        </Content>
      </Card>
    </Container>
  );
}
