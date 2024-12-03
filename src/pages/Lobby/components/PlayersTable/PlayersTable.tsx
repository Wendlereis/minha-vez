import { Position, Row } from './styles';
import { PlayersTableProps } from './types';

export function PlayersTable({ players }: PlayersTableProps) {
  function getPlayerNameItem(current: boolean, name: string) {
    if (!current) {
      return name;
    }
    return 'Você';
  }

  return (
    <table>
      <tbody>
        {players.map(({ name, current }, index) => (
          <Row isCurrent={current} key={name}>
            <Position>{index + 1}.</Position>
            <td>{getPlayerNameItem(current, name)}</td>
          </Row>
        ))}
      </tbody>
    </table>
  );
}
