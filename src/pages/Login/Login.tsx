import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Header } from '../../shared/components/Header';
import { Input } from '../../shared/components/Input';
import { Typography } from '../../shared/components/Typography';
import { theme } from '../../shared/theme';

import { Container, Content } from './styles';

export function Login() {
  return (
    <Container>
      <Header title="Seja bem vindo(a) ao Minha vez!" />
      <Card position="bottom">
        <Content>
          <Typography
            variant="H2"
            color={theme.colors.text.heading.dark}
            textAlign="center"
          >
            Para começar, insira o seu nome
          </Typography>
          <Input
            placeholder="Nome"
            helper="Este será o nome que aparecerá na fila."
          />
          <Button label="Acessar" onClick={() => {}} />
        </Content>
      </Card>
    </Container>
  );
}
