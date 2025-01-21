import { BodyCard, CourtCard, DialogCard, HeaderCard } from './styles';
import { CardProps } from './types';

const cardVariants = {
  body: BodyCard,
  court: CourtCard,
  header: HeaderCard,
  dialog: DialogCard,
};

export function Card({ variant, children, className }: CardProps) {
  const Component = cardVariants[variant];

  return <Component className={className}>{children}</Component>;
}
