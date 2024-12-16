export type Variant = 'H1' | 'H2' | 'H3' | 'Body1' | 'Body2';

export interface TypographyProps {
  children: React.ReactNode;
  color?: string;
  variant?: Variant;
  textAlign?: string;
}

export type StyledTypographyProps = Omit<
  TypographyProps,
  'children' | 'variant'
>;
