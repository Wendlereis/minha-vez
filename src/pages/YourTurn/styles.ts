import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${theme.colors.background.light};
  min-height: 100vh;
  padding: 48px 32px;
  gap: 52px;
`;

export const Image = styled.img`
  width: 160px;
`;

export const Actions = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

export const CourtWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
