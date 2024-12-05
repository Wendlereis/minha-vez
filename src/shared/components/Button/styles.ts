import styled from '@emotion/styled';
import { theme } from '@shared/theme';
import { StyledButtonProps } from './types';
import { css } from '@emotion/react';

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  border: none;

  ${({ variant }) =>
    variant === 'text'
      ? css`
          width: fit-content;
          align-self: center;
          color: ${theme.colors.primary};
          background: none;
          padding: 4px;

          &:active {
            color: ${theme.colors.background.sand};
          }
        `
      : css`
          width: 100%;
          background: ${theme.colors.secondary.dark};
          color: ${theme.colors.text.heading.light};
          border-radius: 40px;
          padding: 16px 32px;

          &:active {
            background: ${theme.colors.secondary.light};
          }
        `}
`;
