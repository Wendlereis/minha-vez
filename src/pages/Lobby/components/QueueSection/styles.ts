import styled from '@emotion/styled';
import { Typography } from '@shared/components/Typography';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 32px 56px;
  gap: 40px;
  justify-content: space-between;
  flex-grow: 1;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled(Typography)`
  margin-bottom: 16px;
`;
