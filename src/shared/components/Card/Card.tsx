import { BodyCard, CourtCard, HeaderCard } from './styles';
import { CardProps } from './types';

const cardVariants = {
  body: BodyCard,
  court: CourtCard,
  header: HeaderCard,
};

export function Card({ variant, children }: CardProps) {
  const Component = cardVariants[variant];

  return <Component>{children}</Component>;
}
