import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background: ${theme.colors.background.sand};
  border-radius: 30px;

  width: 200px;
  height: 130px;
`;
