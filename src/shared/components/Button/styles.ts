import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;

  background: ${theme.colors.secondary.dark};
  color: ${theme.colors.text.heading.light};
  border-radius: 40px;
  border-color: transparent;

  &:active {
    background: ${theme.colors.secondary.light};
  }
`;
