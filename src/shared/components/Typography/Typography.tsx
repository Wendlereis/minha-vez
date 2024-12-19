import { theme } from '../../theme';
import { Body1, Body2, Display, H1, H2, H3 } from './styles';
import { TypographyProps } from './types';

import { getProperty } from 'dot-prop';

const typographyVariants = {
  body1: Body1,
  body2: Body2,
  display: Display,
  h1: H1,
  h2: H2,
  h3: H3,
};

function getColor(path: string): string {
  return getProperty(theme.colors, path);
}

export function Typography({
  children,
  color = 'text.body',
  variant = 'body1',
  className,
}: TypographyProps) {
  const Component = typographyVariants[variant];

  return (
    <Component className={className} color={getColor(color)}>
      {children}
    </Component>
  );
}
