import { Button } from '../../shared/Button';
import { Card } from '../../shared/Card';
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
          {/* TODO - Add input here */}
          <Button label="Acessar" onClick={() => {}} />
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
