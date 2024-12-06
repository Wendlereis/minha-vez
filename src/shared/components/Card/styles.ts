import styled from '@emotion/styled';
import { StyledCardProps } from './types';
import { theme } from '@shared/theme';
import { css } from '@emotion/react';

export const StyledCard = styled.section<StyledCardProps>`
  padding: 72px 32px 56px;

  box-shadow: ${theme.shadow};

  ${({ position }) =>
    position === 'bottom'
      ? css`
          background: ${theme.colors.background.light};
          border-radius: 40px 40px 0px 0px;
          padding: 72px 32px 56px;
        `
      : css`
          background: ${theme.colors.background.gradient};
          border-radius: 0px 0px 40px 40px;
          padding: 32px 32px 56px;
        `};
`;
