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
  padding: 32px 32px 56px;
  gap: 40px;
  justify-content: space-between;
  flex-grow: 1;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
