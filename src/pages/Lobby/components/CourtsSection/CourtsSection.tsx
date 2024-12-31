import { Card } from '@shared/components/Card';
import { Court } from '@shared/components/Court';
import { Typography } from '@shared/components/Typography';

import { Logo, TitleWrapper, EmptyCourtImage, Content } from './styles';
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
          <Court>
            <EmptyCourtImage
              src="assets/sports-equipment-backpack.webp"
              alt="Mochila com equipamentos de esporte"
            />
          </Court>
        ) : (
          fullCourts.map((court) => (
            <Court key={court[0].id}>
              {court.map((player) => (
                <Typography key={player.id}>{player.name}</Typography>
              ))}
            </Court>
          ))
        )}
      </Content>
    </Card>
  );
}
