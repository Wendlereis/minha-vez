import styled from '@emotion/styled';
import { StyledTypographyProps } from './types';
import { css } from '@emotion/react';

function getPropertiesFromExternal(
  color: StyledTypographyProps['color'],
  textAlign: StyledTypographyProps['textAlign'],
) {
  return css`
    color: ${color};
    text-align: ${textAlign};
  `;
}

export const H1 = styled.h1<StyledTypographyProps>`
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  ${({ color, textAlign }) => getPropertiesFromExternal(color, textAlign)}
`;

export const H2 = styled.h2<StyledTypographyProps>`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  ${({ color, textAlign }) => getPropertiesFromExternal(color, textAlign)}
`;

export const H3 = styled.h3<StyledTypographyProps>`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  ${({ color, textAlign }) => getPropertiesFromExternal(color, textAlign)}
`;

export const Body2 = styled.p<StyledTypographyProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  ${({ color, textAlign }) => getPropertiesFromExternal(color, textAlign)}
`;

export const Body1 = styled.p<StyledTypographyProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  ${({ color, textAlign }) => getPropertiesFromExternal(color, textAlign)}
`;
