import { Button } from '@shared/components/Button';
import { Card } from '@shared/components/Card';
import { Header } from '@shared/components/Header';
import { Input } from '@shared/components/Input';

import { Container, Form, InputsWrapper, Title } from './styles';
import { GenderSelector } from './components/GenderSelector';

export function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    // TODO - properly handle form data
    console.log(data);
  };
  return (
    <Container>
      <Header title="Seja bem vindo(a) ao Minha vez!" />
      <Card variant="body">
        <Form onSubmit={handleSubmit}>
          <Title variant="h2" color="text.heading.dark">
            Para começar, insira o seu nome
          </Title>
          <InputsWrapper>
            <Input placeholder="Seu nome" label="Nome" name="name" />
            <GenderSelector />
          </InputsWrapper>
          <Button label="Acessar" type="submit" />
        </Form>
      </Card>
    </Container>
  );
}
