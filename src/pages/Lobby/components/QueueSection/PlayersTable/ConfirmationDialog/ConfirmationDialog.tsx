import { Card } from '@shared/components/Card';
import { Actions, Content, TitleWrapper, Wrapper } from './styles';
import { Typography } from '@shared/components/Typography';
import { Button } from '@shared/components/Button';

export function ConfirmationDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  function onLeave() {
    onClose();
  }

  function onCancel() {
    onClose();
  }

  if (!isOpen) {
    document.body.style.overflow = '';
    return null;
  }

  document.body.style.overflow = 'hidden';

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
            <Button onClick={onLeave} label="Sair da fila" />
            <Button onClick={onCancel} variant="text" label="Voltar" />
          </Actions>
        </Content>
      </Card>
    </Wrapper>
  );
}
