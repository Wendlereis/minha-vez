import { useEffect, useState } from 'react';

import { Login } from './pages/Login';
import { Lobby } from './pages/Lobby';
import { QueuePreview } from './pages/QueuePreview';
import { YourTurn } from './pages/YourTurn';

import { Athlete, Lobby as LobbyType } from '@shared/types';
import { Pages } from './types';

import { io } from 'socket.io-client';

const URL = 'http://localhost:3000';

const socket = io(URL, { autoConnect: false });

socket.connect();

function App() {
  const [currentPage, setCurrentPage] = useState<Pages>('lobby');
  const [{ athletes, court, nextGameDate }, setLobby] = useState<LobbyType>({});
  const [nextGame, setNextGame] = useState<Athlete[] | undefined>(undefined);

  function handleNextGame(game: Athlete[]) {
    setNextGame(game);
    if (game.length) {
      setCurrentPage('your-turn');
    }
  }

  useEffect(() => {
    socket.on('lobby:list', setLobby);
    socket.on('court:next-game', handleNextGame);

    return () => {
      socket.off('lobby:list', setLobby);
      socket.off('court:next-game', handleNextGame);
    };
  }, []);

  switch (currentPage) {
    case 'login':
      return <Login />;
    case 'lobby':
      return (
        <Lobby athletes={athletes} court={court} nextGameDate={nextGameDate} />
      );
    case 'queue-preview':
      return <QueuePreview />;
    case 'your-turn':
      return <YourTurn game={nextGame} />;
    default:
      return null;
  }
}

export default App;
