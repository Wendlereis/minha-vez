import { Body2, StyledInput, Wrapper } from './styles';
import { InputProps } from './types';

export function Input({ placeholder, helper }: InputProps) {
  return (
    <Wrapper>
      <StyledInput placeholder={placeholder} />
      <Body2>{helper}</Body2>
    </Wrapper>
  );
}
