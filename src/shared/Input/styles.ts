import styled from '@emotion/styled';
import { theme } from '../theme';

export const StyledInput = styled.input`
  padding: 24px 32px;
  background: ${theme.colors.background.sand};
  border: 1px solid ${theme.colors.primary};
  border-radius: 40px;
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

export const Body2 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.primary};
  margin: 0;
  margin-left: 30px;
`;
