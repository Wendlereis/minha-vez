import { DateTime } from 'luxon';
import { Typography } from '@shared/components/Typography';
import { QueueDisclaimerProps } from './types';

function getWaitingTime(nextGameDate: string) {
  const futureDate = DateTime.fromISO(nextGameDate);

  return futureDate.toRelative({
    unit: ['hours', 'minutes'],
    locale: 'pt-BR',
  });
}

export function QueueDisclaimer({
  hasEnoughPlayers,
  nextGameDate,
}: QueueDisclaimerProps) {
  if (!hasEnoughPlayers || !nextGameDate) {
    return (
      <Typography>
        Aguarde a entrada de outros jogadores para formar o próximo grupo.
      </Typography>
    );
  }

  const waitingTime = getWaitingTime(nextGameDate);

  return (
    <Typography>
      Seu próximo jogo está previsto para começar
      <strong> {waitingTime}</strong>.
    </Typography>
  );
}
