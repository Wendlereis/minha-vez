import styled from '@emotion/styled';
import { theme } from '../../shared/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${theme.colors.background.gradient};
  height: 100vh;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  gap: 40px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
`;

export const Image = styled.img`
  width: 130px;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 40px;
  color: ${theme.colors.text.heading.light};
  font-weight: 600;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 32px;
  color: ${theme.colors.text.heading.dark};
  font-weight: 600;
`;
