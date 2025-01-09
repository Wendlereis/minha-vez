import styled from '@emotion/styled';
import { Typography } from '@shared/components/Typography';
import { theme } from '@shared/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background.gradient};
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

export const InputsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled(Typography)`
  text-align: center;
`;
