import { useState } from 'react';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function App() {
  const [user, setUser] = useState<string>();
  const [players, setPlayers] = useState<string[]>();
  const [playersInGame, setPlayersInGame] = useState<string[]>();

  socket.on('players-waiting', (data: string[]) => {
    setPlayers(data);
  });

  socket.on('players-in-game', (data: string[]) => {
    setPlayersInGame(data);
  });

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setUser(event.target.value);
        }}
      />
      <button
        onClick={() => {
          socket.emit('join', { name: user });
        }}
      >
        entrar na fila
      </button>
      <button
        onClick={() => {
          socket.emit('join-court', { name: user });
        }}
      >
        entrar na quadra
      </button>
      <button
        onClick={() => {
          socket.emit('left-court', { name: user });
        }}
      >
        sair da quadra
      </button>
      Fila da quadra
      {JSON.stringify(players, null, 2)}
      Galera jogando
      {JSON.stringify(playersInGame, null, 2)}
    </>
  );
}

export default App;
