import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { IconProps, Size } from './types';

function getIconSizes(size: Size) {
  switch (size) {
    case 'large':
      return css`
        width: 32px;
        height: 32px;
      `;
    case 'small':
      return css`
        width: 20px;
        height: 20px;
      `;
  }
}

export const Icon = styled.img<IconProps>`
  ${({ size }) => getIconSizes(size)}
`;
