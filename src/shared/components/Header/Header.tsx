import { Container, Image, Title } from './styles';
import { HeaderProps } from './types';

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Image src="assets/logo.png" alt="Minha Vez logo" />
      <Title variant="h1" color="text.heading.light">
        {title}
      </Title>
    </Container>
  );
}
