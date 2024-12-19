import { Typography } from '@shared/components/Typography';
import { HelperWrapper, StyledInput, Wrapper } from './styles';
import { InputProps } from './types';

export function Input({ placeholder, helper }: InputProps) {
  return (
    <Wrapper>
      <StyledInput placeholder={placeholder} />
      <HelperWrapper>
        <Typography variant="body2" color="primary">
          {helper}
        </Typography>
      </HelperWrapper>
    </Wrapper>
  );
}
