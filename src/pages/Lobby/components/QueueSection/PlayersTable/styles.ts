import styled from '@emotion/styled';
import { theme } from '@shared/theme';
import { RowProps } from './types';
import { css } from '@emotion/react';

export const Position = styled.td`
  width: 40px;
`;

export const Player = styled.td`
  display: flex;
  gap: 8px;
`;

export const Row = styled.tr<RowProps>`
  display: flex;
  padding: 12px 0;
  border-top: 1px solid ${theme.colors.background.sand};

  &:last-child {
    border-bottom: 1px solid ${theme.colors.background.sand};
  }

  ${({ isCurrent }) =>
    isCurrent
      ? css`
          font-size: 20px;
          line-height: 24px;
          color: ${theme.colors.secondary.dark};
          font-weight: 600;
        `
      : css`
          font-size: 16px;
          line-height: 20px;
          color: ${theme.colors.text.body};
          font-weight: 500;
        `};
`;
