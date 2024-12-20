import { Card } from '@shared/components/Card';
import { Actions, Content, TitleWrapper, Wrapper } from './styles';
import { useEffect } from 'react';
import { Typography } from '@shared/components/Typography';
import { Button } from '@shared/components/Button';

export function ConfirmationDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Card variant="dialog">
        <Content>
          <TitleWrapper>
            <Typography variant="h2" color="text.heading.dark">
              Vai ficar de fora?
            </Typography>
            <Typography>
              Você perderá a sua posição atual, mas poderá entrar novamente na
              fila quando quiser.
            </Typography>
          </TitleWrapper>
          <Actions>
            <Button onClick={onClose} label="Sair da fila" />
            <Button onClick={onClose} variant="text" label="Voltar" />
          </Actions>
        </Content>
      </Card>
    </Wrapper>
  );
}
