import styled from '@emotion/styled';
import { theme } from '../../../../shared/theme';

export const Item = styled.section`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Circle = styled.div`
  background: ${theme.colors.background.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 100px;
`;
