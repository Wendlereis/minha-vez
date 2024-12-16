export type Variant = 'header' | 'body' | 'court';

export interface CardProps {
  variant: Variant;
  children: React.ReactNode;
}
