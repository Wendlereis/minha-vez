import { StyledCard } from './styles';
import { CardProps } from './types';

export function Card({ position, children }: CardProps) {
  return <StyledCard position={position}>{children}</StyledCard>;
}
