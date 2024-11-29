export type Position = 'top' | 'bottom';

export interface CardProps {
  position: Position;
  children: React.ReactNode;
}

export type StyledCardProps = Omit<CardProps, 'children'>;
