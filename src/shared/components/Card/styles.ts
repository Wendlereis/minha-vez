import styled from '@emotion/styled';
import { StyledCardProps } from './types';
import { theme } from '../../theme';

export const StyledCard = styled.section<StyledCardProps>`
  padding: 72px 32px 56px;

  background: ${theme.colors.background.light};
  box-shadow: ${theme.shadow};

  border-radius: ${({ position }) =>
    position === 'bottom' ? '40px 40px 0px 0px' : '0px 0px 40px 40px'};
`;
