import { Card } from '@shared/components/Card';
import { Actions, Content, TitleWrapper, Wrapper } from './styles';
import { Typography } from '@shared/components/Typography';
import { Button } from '@shared/components/Button';
import { useEffect } from 'react';
import { ButtonProps } from '@shared/components/Button/types';

export function Dialog({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions: ButtonProps[];
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Wrapper>
      <Card variant="dialog">
        <Content>
          <TitleWrapper>
            <Typography variant="h2" color="text.heading.dark">
              {title}
            </Typography>
            <Typography>{subtitle}</Typography>
          </TitleWrapper>
          <Actions>
            {actions.map((action) => (
              <Button key={action.label} {...action} />
            ))}
          </Actions>
        </Content>
      </Card>
    </Wrapper>
  );
}
