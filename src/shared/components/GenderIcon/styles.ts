import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { IconProps } from './types';

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
