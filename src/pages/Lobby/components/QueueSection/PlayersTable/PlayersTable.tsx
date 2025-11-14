import { GenderIcon } from '@shared/components/GenderIcon';
import { Player, Position, Row } from './styles';
import { PlayersTableProps } from './types';

export function PlayersTable({ athletes }: PlayersTableProps) {
  const currentUserId = '1234';

  return (
    <table>
      <tbody>
        {athletes.map(({ id, name, gender }, index) => {
          const isCurrentUser = id === currentUserId;

          return (
            <Row isCurrent={isCurrentUser} key={id}>
              <Position>{index + 1}.</Position>
              {isCurrentUser ? (
                <Player>Você</Player>
              ) : (
                <Player>
                  {name}
                  <GenderIcon gender={gender} size="small" />
                </Player>
              )}
            </Row>
          );
        })}
      </tbody>
    </table>
  );
}
