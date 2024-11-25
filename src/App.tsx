import { useState } from 'react';

import { Login } from './pages/Login';
import { Lobby } from './pages/Lobby';
import { QueuePreview } from './pages/QueuePreview';
import { YourTurn } from './pages/YourTurn';

type Pages = 'login' | 'queue-preview' | 'lobby' | 'your-turn';

function App() {
  const [currentPage] = useState<Pages>('login');

  switch (currentPage) {
    case 'login':
      return <Login />;
    case 'lobby':
      return <Lobby />;
    case 'queue-preview':
      return <QueuePreview />;
    case 'your-turn':
      return <YourTurn />;
    default:
      return null;
  }
}

export default App;
