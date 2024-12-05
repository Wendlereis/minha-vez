import { Wrapper } from './styles';
import { CourtProps } from './types';

export function Court({ children }: CourtProps) {
  return <Wrapper>{children}</Wrapper>;
}
