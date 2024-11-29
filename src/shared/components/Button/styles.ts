import styled from '@emotion/styled';
import { theme } from '../../theme';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;

  // TODO - add text variant
  background: ${theme.colors.secondary};
  color: ${theme.colors.text.heading.light};
  border-radius: 40px;
  border-color: transparent;

  &:active {
    background: #468beb;
  }
`;
