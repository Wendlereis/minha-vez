import styled from '@emotion/styled';
import { Typography } from '@shared/components/Typography';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px 40px;
  gap: 24px;
  justify-content: space-between;
  height: 100%;
`;

export const Image = styled.img`
  width: 120px;
`;

export const Title = styled(Typography)`
  text-align: center;
`;
