import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@shared/components/Typography';
import { theme } from '@shared/theme';

export const Label = styled(Typography)`
  font-weight: 600;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const Option = styled.label<{ selected: boolean }>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;

  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.text.heading.dark};

  background: ${theme.colors.background.sand};
  border: 1px solid ${theme.colors.text.heading.dark};
  border-radius: 50px;

  ${({ selected }) =>
    selected &&
    css`
      outline: 1px solid ${theme.colors.secondary.dark};
      color: ${theme.colors.text.body};
    `};

  &:focus {
    outline: 1px solid ${theme.colors.text.heading.dark};
  }

  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;
