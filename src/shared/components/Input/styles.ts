import styled from '@emotion/styled';
import { theme } from '../../theme';

export const StyledInput = styled.input`
  background: ${theme.colors.background.sand};
  border: 1px solid ${theme.colors.primary};
  border-radius: 40px;
  padding: 24px 32px;
  font-size: 20px;
  color: ${theme.colors.text.body};

  &::placeholder {
    color: ${theme.colors.primary};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HelperWrapper = styled.div`
  margin-left: 24px;
`;
