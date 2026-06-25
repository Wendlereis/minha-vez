import { useEffect, useState } from 'react';

import { Login } from './pages/Login';
import { Lobby } from './pages/Lobby';
import { QueuePreview } from './pages/QueuePreview';
import { YourTurn } from './pages/YourTurn';

import { Athlete, Lobby as LobbyType } from '@shared/types';
import { Pages, PendingPlayer } from './types';

import { io } from 'socket.io-client';

const URL = 'http://localhost:3000';

const socket = io(URL, { autoConnect: false });

socket.connect();

function App() {
  const [currentPage, setCurrentPage] = useState<Pages>('login');
  const [{ athletes, court, nextGameDate }, setLobby] = useState<LobbyType>({});
  const [previewInfo, setPreviewInfo] = useState<{
    queueSize: number;
    nextGameDate: string;
  } | null>(null);
  const [nextGame, setNextGame] = useState<PendingPlayer[] | undefined>(undefined);
  const [user, setUser] = useState<Omit<Athlete, 'id'> | null>(null);
  const [hasLeftCourt, setHasLeftCourt] = useState(false);

  function handleNextGame(game: PendingPlayer[]) {
    setNextGame(game);
    // Only switch to 'your-turn' if the user is pending or accepted
    if (game.some((p) => p.athlete.id === socket.id && p.status !== 'declined')) {
      setCurrentPage('your-turn');
    } else {
      // If user was declined or removed, kick them back to lobby
      setCurrentPage((prev) => (prev === 'your-turn' ? 'lobby' : prev));
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
      socket.emit('court:skip', user);
      setCurrentPage('lobby');
    }
  }

  function handleJoinCourt() {
    if (user) {
      setHasLeftCourt(false); // Reset when joining a new court
      socket.emit('court:join', user);
    }
  }

  function handleFinishGame(rejoinQueue: boolean) {
    if (user) {
      socket.emit('court:leave', { ...user, rejoinQueue });
      if (rejoinQueue) {
        setCurrentPage('lobby');
      } else {
        setHasLeftCourt(true);
        socket.emit('lobby:leave');
        setLobby({});
        setCurrentPage('queue-preview');
      }
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

  const isPlaying = court?.some(p => p.id === socket.id);

  if (isPlaying && !hasLeftCourt) {
    return (
      <YourTurn
        game={[]} // We'll pass court as game in the component
        court={court}
        userId={socket.id}
        isPlaying={true}
        onSkip={handleSkip}
        onJoinCourt={handleJoinCourt}
        onFinishGame={handleFinishGame}
      />
    );
  }

  switch (currentPage) {
    case 'login':
      return <Login onLogin={handleLogin} />;
    case 'lobby':
      return (
        <Lobby
          athletes={athletes}
          court={court}
          nextGameDate={nextGameDate}
          onLeave={handleLeave}
        />
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
          userId={socket.id}
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
