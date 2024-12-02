import { theme } from '../../theme';
import { Typography } from '../Typography';
import { Container, Image } from './styles';
import { HeaderProps } from './types';

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Image src="public/assets/logo.png" alt="Minha Vez logo" />
      <Typography
        variant="H1"
        color={theme.colors.text.heading.light}
        textAlign="center"
      >
        {title}
      </Typography>
    </Container>
  );
}
