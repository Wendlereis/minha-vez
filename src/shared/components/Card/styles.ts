import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const BodyCard = styled.section`
  padding: 72px 32px 56px;
  box-shadow: ${theme.shadow};
  background: ${theme.colors.background.light};
  border-radius: 40px 40px 0px 0px;
  padding: 72px 32px 56px;
`;

export const CourtCard = styled.section`
  background: ${theme.colors.background.sand};
  border-radius: 30px;
  width: 200px;
  height: 130px;
`;

export const HeaderCard = styled.header`
  padding: 72px 32px 56px;
  box-shadow: ${theme.shadow};
  background: ${theme.colors.background.gradient};
  border-radius: 0px 0px 40px 40px;
  padding: 32px 32px 56px;
`;
