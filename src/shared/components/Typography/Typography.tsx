import { theme } from '../../theme';
import { Body1, Body2, H1, H2, H3 } from './styles';
import { TypographyProps } from './types';

const typographyVariants = {
  Body1: Body1,
  Body2: Body2,
  H1: H1,
  H2: H2,
  H3: H3,
};

export function Typography({
  children,
  color = theme.colors.text.body,
  variant = 'Body1',
  textAlign = 'left',
  className,
}: TypographyProps) {
  const Component = typographyVariants[variant];

  return (
    <Component className={className} color={color} textAlign={textAlign}>
      {children}
    </Component>
  );
}
