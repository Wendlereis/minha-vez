import styled from '@emotion/styled';
import { IconProps } from './types';
import { css } from '@emotion/react';

export const Icon = styled.img<IconProps>`
  ${({ size }) =>
    size === 'large'
      ? css`
          width: 32px;
          height: 32px;
        `
      : css`
          width: 20px;
          height: 20px;
        `};
`;
