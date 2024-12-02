import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Header } from '../../shared/components/Header';
import { Typography } from '../../shared/components/Typography';
import { theme } from '../../shared/theme';
import { PreviewItem } from './components/PreviewItem';
import { Container, Content, PreviewContainer } from './styles';

export function QueuePreview() {
  return (
    <Container>
      <Header title="Pronto para o aquecimento?" />
      <Card position="bottom">
        <Content>
          <Typography
            variant="H2"
            color={theme.colors.text.heading.dark}
            textAlign="center"
          >
            Garanta agora seu lugar na fila
          </Typography>
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

          <Button label="Entrar na fila" onClick={() => {}} />
        </Content>
      </Card>
    </Container>
  );
}
