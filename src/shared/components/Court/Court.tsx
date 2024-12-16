import { Card } from '@shared/components/Card';
import { Wrapper } from './styles';
import { CourtProps } from './types';

export function Court({ children }: CourtProps) {
  return (
    <Card variant="court">
      <Wrapper>{children}</Wrapper>
    </Card>
  );
}
