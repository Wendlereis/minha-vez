import { DateTime } from 'luxon';
import { Typography } from '@shared/components/Typography';
import { QueueDisclaimerProps } from './types';

function getWaitingTime(nextGameDate: string) {
  const futureDate = DateTime.fromISO(nextGameDate);

  const now = DateTime.utc();

  const diffInMinutes = futureDate.diff(now).milliseconds / 60000;

  return Math.ceil(diffInMinutes);
}

export function QueueDisclaimer({
  hasEnoughPlayers,
  nextGameDate,
}: QueueDisclaimerProps) {
  if (!hasEnoughPlayers) {
    return (
      <Typography>
        Aguarde a entrada de outros jogadores para formar o próximo grupo.
      </Typography>
    );
  }

  return (
    <Typography>
      O tempo estimado de espera até o seu próximo jogo é de
      <strong> {getWaitingTime(nextGameDate)} minutos</strong>.
    </Typography>
  );
}
