import { Card } from '@shared/components/Card';
import { Court } from '@shared/components/Court';
import { Typography } from '@shared/components/Typography';
import { theme } from '@shared/theme';

import { Logo, TitleWrapper, Content } from './styles';
import { CourtsSectionProps } from './types';

export function CourtsSection({ courts }: CourtsSectionProps) {
  return (
    <Card position="top">
      <Content>
        <Logo src="public/assets/logo.png" alt="Minha Vez logo" />
        <TitleWrapper>
          <Typography variant="H3" color={theme.colors.text.heading.dark}>
            Em quadra
          </Typography>
        </TitleWrapper>
        {courts.map((court) => (
          <Court>
            {court.map(({ name }) => (
              <Typography>{name}</Typography>
            ))}
          </Court>
        ))}
      </Content>
    </Card>
  );
}
