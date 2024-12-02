import styled from '@emotion/styled';
import { theme } from '../../shared/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background.gradient};
  height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
`;
