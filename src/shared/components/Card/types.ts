export type Variant = 'header' | 'body' | 'court' | 'dialog';

export interface CardProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}
