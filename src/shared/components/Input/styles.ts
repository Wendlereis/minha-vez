import styled from '@emotion/styled';
import { theme } from '@shared/theme';
import { Typography } from '@shared/components/Typography';

export const StyledInput = styled.input`
  background: ${theme.colors.background.sand};
  border: 1px solid ${theme.colors.text.heading.dark}; // TODO - create such a lineAndBorders color
  border-radius: 40px;
  padding: 24px 32px;
  font-size: 20px;
  color: ${theme.colors.text.body};

  &::placeholder {
    color: ${theme.colors.text.heading.dark};
  }

  &:focus {
    outline: 1px solid ${theme.colors.text.heading.dark};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HelperWrapper = styled.div`
  margin-left: 24px;
`;

export const Label = styled(Typography)`
  font-weight: 600;
`;
