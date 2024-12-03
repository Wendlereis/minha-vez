import styled from '@emotion/styled';
import { theme } from '../../shared/theme';

export const Container = styled.div`
  background: ${theme.colors.background.light};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 40px;
`;
