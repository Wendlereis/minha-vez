import { Button } from '@shared/components/Button';
import { Card } from '@shared/components/Card';
import { Header } from '@shared/components/Header';
import { Input } from '@shared/components/Input';

import { Container, Content, Title } from './styles';

export function Login() {
  return (
    <Container>
      <Header title="Seja bem vindo(a) ao Minha vez!" />
      <Card variant="body">
        <Content>
          <Title variant="h2" color="text.heading.dark">
            Para começar, insira o seu nome
          </Title>
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
