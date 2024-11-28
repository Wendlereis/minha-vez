import { Button } from '../../shared/Button';
import { Card } from '../../shared/Card';
import { Input } from '../../shared/Input';
import { Container, Content, Header, Image, H1, H2 } from './styles';

export function Login() {
  return (
    <Container>
      <Header>
        <Image src="public/assets/logo.png" />
        <H1>Seja bem-vindo(a) ao Minha vez!</H1>
      </Header>
      <Card position="bottom">
        <Content>
          <H2>Para começar, insira o seu nome</H2>
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

/*
TO DO LIST
- Create shared Typography component
- Create input component
*/
