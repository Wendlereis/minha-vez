import styled from '@emotion/styled';
import { StyledCardProps } from './types';
import { theme } from '../theme';
import { css } from '@emotion/react';

export const StyledCard = styled.section<StyledCardProps>`
  /* padding: 52px 32px; */

  width: 100%;
  height: fit-content;

  background: ${theme.colors.background.light};
  box-shadow: ${theme.shadow};
  position: absolute;

  ${({ position }) =>
    position === 'bottom'
      ? css`
          border-radius: 40px 40px 0px 0px;
          bottom: 0;
        `
      : css`
          border-radius: 0px 0px 40px 40px;
          top: 0;
        `}
`;
