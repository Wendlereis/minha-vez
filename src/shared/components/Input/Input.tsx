import { theme } from '../../theme';
import { Typography } from '../Typography/Typography';
import { HelperWrapper, StyledInput, Wrapper } from './styles';
import { InputProps } from './types';

export function Input({ placeholder, helper }: InputProps) {
  return (
    <Wrapper>
      <StyledInput placeholder={placeholder} />
      <HelperWrapper>
        <Typography variant="Body2" color={theme.colors.primary}>
          {helper}
        </Typography>
      </HelperWrapper>
    </Wrapper>
  );
}
