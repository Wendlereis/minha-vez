import styled from '@emotion/styled';
import { Card } from '@shared/components/Card';
import { Typography } from '@shared/components/Typography';

export const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 100%;
`;

export const Player = styled.div`
  display: flex;
  gap: 8px;
`;

export const Text = styled(Typography)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
