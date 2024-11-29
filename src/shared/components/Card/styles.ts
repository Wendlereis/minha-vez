import styled from '@emotion/styled';
import { StyledCardProps } from './types';
import { theme } from '../../theme';
import { css } from '@emotion/react';

export const StyledCard = styled.section<StyledCardProps>`
  padding: 72px 32px;

  // TODO - Change this based on the variant
  background: ${theme.colors.background.light};
  box-shadow: ${theme.shadow};

  ${({ position }) =>
    position === 'bottom'
      ? css`
          border-radius: 40px 40px 0px 0px;
        `
      : css`
          border-radius: 0px 0px 40px 40px;
        `}
`;
