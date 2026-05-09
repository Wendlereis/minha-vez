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
  const [currentPage, setCurrentPage] = useState<Pages>('login');
  const [{ athletes, court, nextGameDate }, setLobby] = useState<LobbyType>({});
  const [previewInfo, setPreviewInfo] = useState<{ queueSize: number; nextGameDate: string } | null>(null);
  const [nextGame, setNextGame] = useState<Athlete[] | undefined>(undefined);
  const [user, setUser] = useState<Omit<Athlete, 'id'> | null>(null);

  function handleNextGame(game: Athlete[]) {
    setNextGame(game);
    if (game.some((a) => a.id === socket.id)) {
      setCurrentPage('your-turn');
    }
  }

  function handleLogin(data: Omit<Athlete, 'id'>) {
    setUser(data);
    setCurrentPage('queue-preview');
  }

  function handleJoinQueue() {
    if (user) {
      socket.emit('lobby:join', user);
      setCurrentPage('lobby');
    }
  }

  function handleLeave() {
    if (user) {
      socket.emit('lobby:leave');
      setLobby({});
      setCurrentPage('queue-preview');
    }
  }

  function handleSkip() {
    if (user) {
      socket.emit('lobby:leave');
      socket.emit('lobby:join', user);
      setCurrentPage('lobby');
    }
  }

  function handleJoinCourt() {
    if (user) {
      socket.emit('court:join', user);
    }
  }

  function handleFinishGame() {
    if (user) {
      socket.emit('court:leave', user);
      setCurrentPage('lobby');
    }
  }

  useEffect(() => {
    socket.on('lobby:list', setLobby);
    socket.on('lobby:preview', setPreviewInfo);
    socket.on('court:next-game', handleNextGame);

    return () => {
      socket.off('lobby:list', setLobby);
      socket.off('lobby:preview', setPreviewInfo);
      socket.off('court:next-game', handleNextGame);
    };
  }, []);

  switch (currentPage) {
    case 'login':
      return <Login onLogin={handleLogin} />;
    case 'lobby':
      return (
        <Lobby athletes={athletes} court={court} nextGameDate={nextGameDate} onLeave={handleLeave} />
      );
    case 'queue-preview':
      return (
        <QueuePreview
          queueSize={athletes ? athletes.length : (previewInfo?.queueSize ?? 0)}
          nextGameDate={nextGameDate || previewInfo?.nextGameDate}
          onJoin={handleJoinQueue}
        />
      );
    case 'your-turn':
      return (
        <YourTurn
          game={nextGame}
          onSkip={handleSkip}
          onJoinCourt={handleJoinCourt}
          onFinishGame={handleFinishGame}
        />
      );
    default:
      return null;
  }
}

export default App;
