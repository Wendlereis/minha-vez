import styled from '@emotion/styled';
import { Typography } from '@shared/components/Typography';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const GameStartedWrapper = styled(Wrapper)`
  gap: 8px;
`;

export const CenteredText = styled(Typography)`
  text-align: center;
`;
