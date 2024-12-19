import styled from '@emotion/styled';
import { Typography } from '@shared/components/Typography';
import { theme } from '@shared/theme';

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
  gap: 48px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 24px;
`;

export const Image = styled.img`
  max-width: 380px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CenteredText = styled(Typography)`
  text-align: center;
`;
