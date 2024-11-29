import { theme } from '../../theme';
import { Body1, Body2, H1, H2, H3 } from './styles';
import { TypographyProps } from './types';

export const Typography = ({
  children,
  color = theme.colors.text.body,
  variant = 'Body1',
  textAlign = 'left',
}: TypographyProps) => {
  const setup = {
    Body1: Body1,
    Body2: Body2,
    H1: H1,
    H2: H2,
    H3: H3,
  };

  const Component = setup[variant];

  return (
    <Component color={color} textAlign={textAlign}>
      {children}
    </Component>
  );
};
