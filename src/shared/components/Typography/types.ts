export type Variant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2';

export interface TypographyProps {
  children: React.ReactNode;
  color?: string;
  variant?: Variant;
  className?: string;
}

export type StyledTypographyProps = Omit<
  TypographyProps,
  'children' | 'variant'
>;
