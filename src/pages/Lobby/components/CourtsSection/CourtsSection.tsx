import { Card } from '@shared/components/Card';
import { Court } from '@shared/components/Court';
import { Typography } from '@shared/components/Typography';

import { EmptyCourt } from './EmptyCourt';
import { Logo, TitleWrapper, Content } from './styles';
import { CourtsSectionProps } from './types';

export function CourtsSection({ courts }: CourtsSectionProps) {
  const fullCourts = courts.filter((court) => court.length > 0);

  const hasEmptyState = fullCourts.length === 0;

  return (
    <Card variant="header">
      <Content>
        <Logo src="assets/logo.png" alt="Minha Vez logo" />
        <TitleWrapper>
          <Typography variant="h3" color="text.heading.dark">
            Em quadra
          </Typography>
          {hasEmptyState && (
            <Typography>Nenhum jogador em quadra no momento.</Typography>
          )}
        </TitleWrapper>
        {hasEmptyState ? (
          <EmptyCourt />
        ) : (
          fullCourts.map((court) => <Court key={court[0].id} court={court} />)
        )}
      </Content>
    </Card>
  );
}
