import { Position, Row } from './styles';
import { PlayersTableProps } from './types';

export function PlayersTable({ players }: PlayersTableProps) {
  const currentUserId = '1234';

  return (
    <table>
      <tbody>
        {players.map((player, index) => {
          const isCurrentUser = player.id === currentUserId;

          return (
            <Row isCurrent={isCurrentUser} key={player.id}>
              <Position>{index + 1}.</Position>
              <td>{isCurrentUser ? 'Você' : player.name}</td>
            </Row>
          );
        })}
      </tbody>
    </table>
  );
}
