import { Typography } from '@shared/components/Typography';
import { HelperWrapper, Label, StyledInput, Wrapper } from './styles';
import { InputProps } from './types';

export function Input({ placeholder, helper, label }: InputProps) {
  return (
    <Wrapper>
      <Label color="text.heading.dark">{label}</Label>
      <StyledInput placeholder={placeholder} />
      {/* TODO - adjust helper to be used on error only */}
      {helper && (
        <HelperWrapper>
          <Typography variant="body2" color="primary">
            {helper}
          </Typography>
        </HelperWrapper>
      )}
    </Wrapper>
  );
}
