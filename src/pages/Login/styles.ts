import styled from '@emotion/styled';
import { theme } from '../../shared/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background.gradient};
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px 40px;
  gap: 40px;
  justify-content: space-between;
  height: 100%;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
`;

export const Image = styled.img`
  width: 130px;
`;
