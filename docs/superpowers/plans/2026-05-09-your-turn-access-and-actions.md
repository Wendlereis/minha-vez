# YourTurn Screen — Access Control & Wired Actions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the `YourTurn` screen so it only appears for athletes selected for the next game, and wire up the skip, join court, and finish game actions.

**Architecture:** All changes are frontend-only (`minha-vez`). The access control guard is added in `App.tsx` by comparing `socket.id` against the received `game` array. Action handlers are defined in `App.tsx` and threaded down as props through `YourTurn` to `Actions`. Existing server events (`lobby:leave`, `lobby:join`, `court:join`, `court:leave`) are reused — no server changes needed.

**Tech Stack:** React 18, TypeScript, Socket.IO client (`socket.io-client`)

---

## File Map

| File | Change |
|---|---|
| `src/App.tsx` | Fix `handleNextGame` guard; add `handleSkip`, `handleJoinCourt`, `handleFinishGame`; pass callbacks to `YourTurn` |
| `src/pages/YourTurn/YourTurn.tsx` | Accept `onSkip`, `onJoinCourt`, `onFinishGame` props; pass to `Actions` |
| `src/pages/YourTurn/components/Actions/Actions.tsx` | Accept and wire the three callbacks to buttons |

> **Note:** No test framework is set up in this project. Each task includes a manual verification step instead.

---

## Task 1: Fix Access Control in `handleNextGame`

**Files:**
- Modify: `src/App.tsx`

### Context

`handleNextGame` currently navigates **all** connected clients to `'your-turn'` whenever `court:next-game` fires. The server uses `socket.id` as each athlete's `id`. Adding a guard that checks `socket.id` against the received game array fixes this.

- [ ] **Step 1: Open `src/App.tsx` and locate `handleNextGame`**

Current code (lines 26–30):

```ts
function handleNextGame(game: Athlete[]) {
  setNextGame(game);
  if (game.length) {
    setCurrentPage('your-turn');
  }
}
```

- [ ] **Step 2: Replace `handleNextGame` with the guarded version**

```ts
function handleNextGame(game: Athlete[]) {
  setNextGame(game);
  if (game.some((a) => a.id === socket.id)) {
    setCurrentPage('your-turn');
  }
}
```

> `socket` is already module-level in `App.tsx`, so `socket.id` is always the current connection ID.

- [ ] **Step 3: Manually verify the guard works**

  1. Open two browser tabs (two clients).
  2. Log in and join the queue in both tabs.
  3. Add 2 more clients to reach 4 queue members and trigger `court:next-game`.
  4. Confirm only the 4 selected clients navigate to `YourTurn`. All other tabs stay on their current screen.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "fix: only show YourTurn screen to selected players"
```

---

## Task 2: Add Action Handlers to `App.tsx`

**Files:**
- Modify: `src/App.tsx`

### Context

Add three handlers that emit the correct socket events and navigate the user. These are regular functions (not registered with `socket.on`), so they always have access to current `user` state via closure.

- [ ] **Step 1: Add `handleSkip` after `handleLeave` in `App.tsx`**

`handleSkip` removes the player from their current queue position and re-adds them at the end by emitting `lobby:leave` (no payload — server uses `socket.id`) then `lobby:join` (with user data), then navigates back to the lobby.

```ts
function handleSkip() {
  if (user) {
    socket.emit('lobby:leave');
    socket.emit('lobby:join', user);
    setCurrentPage('lobby');
  }
}
```

- [ ] **Step 2: Add `handleJoinCourt` after `handleSkip`**

`handleJoinCourt` adds the player to the court on the server. The local `gameStarted` state (in `Actions`) will flip to `true` via prop callback.

```ts
function handleJoinCourt() {
  if (user) {
    socket.emit('court:join', user);
  }
}
```

- [ ] **Step 3: Add `handleFinishGame` after `handleJoinCourt`**

`handleFinishGame` removes the player from the court and re-adds them to the queue on the server, then navigates back to the lobby.

```ts
function handleFinishGame() {
  if (user) {
    socket.emit('court:leave', user);
    setCurrentPage('lobby');
  }
}
```

- [ ] **Step 4: Update the `YourTurn` render in the switch statement**

Find (around line 80):

```tsx
case 'your-turn':
  return <YourTurn game={nextGame} />;
```

Replace with:

```tsx
case 'your-turn':
  return (
    <YourTurn
      game={nextGame}
      onSkip={handleSkip}
      onJoinCourt={handleJoinCourt}
      onFinishGame={handleFinishGame}
    />
  );
```

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add skip, join court, and finish game handlers"
```

---

## Task 3: Thread Props Through `YourTurn`

**Files:**
- Modify: `src/pages/YourTurn/YourTurn.tsx`

### Context

`YourTurn` needs to accept the three new callbacks and pass them down to `Actions`.

- [ ] **Step 1: Update `YourTurnProps` and the component signature**

Replace the entire file content with:

```tsx
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

import { Typography } from '@shared/components/Typography';
import { Court } from '@shared/components/Court';
import { Athlete } from '@shared/types';

import { Actions } from './components/Actions';
import { Container, Content, CourtWrapper, Image } from './styles';

function buildConfetti() {
  const commonFields = {
    particleCount: 160,
    spread: 120,
    colors: ['#F78710', '#FF4D00', '#FFC37E'],
  };

  confetti({
    ...commonFields,
    origin: { x: 1, y: 0.6 },
  });

  confetti({
    ...commonFields,
    origin: { x: 0, y: 1 },
  });
}

type YourTurnProps = {
  game?: Athlete[];
  onSkip: () => void;
  onJoinCourt: () => void;
  onFinishGame: () => void;
};

export function YourTurn({ game = [], onSkip, onJoinCourt, onFinishGame }: YourTurnProps) {
  useEffect(() => {
    buildConfetti();
  }, []);

  return (
    <Container>
      <Content>
        <Image
          src="assets/athletes-playing-beach-tennis.webp"
          alt="Atletas jogando beach tennis"
        />
        <Typography variant="display" color="secondary.dark">
          É a sua vez!
        </Typography>
        <CourtWrapper>
          <Typography variant="h3" color="text.heading.dark">
            Você vai jogar com
          </Typography>
          <Court court={game} />
        </CourtWrapper>
      </Content>
      <Actions onSkip={onSkip} onJoinCourt={onJoinCourt} onFinishGame={onFinishGame} />
    </Container>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles with no errors**

```bash
npx tsc --noEmit
```

Expected: no output (clean).

- [ ] **Step 3: Commit**

```bash
git add src/pages/YourTurn/YourTurn.tsx
git commit -m "feat: thread action callbacks through YourTurn props"
```

---

## Task 4: Wire Callbacks in `Actions`

**Files:**
- Modify: `src/pages/YourTurn/components/Actions/Actions.tsx`

### Context

`Actions` currently has empty `onClick` handlers and manages `gameStarted` locally. Wire the callbacks from props.

- [ ] **Step 1: Replace the entire `Actions.tsx` content**

```tsx
import { Button } from '@shared/components/Button';
import { CenteredText, GameStartedWrapper, Wrapper } from './styles';
import { useState } from 'react';

type ActionsProps = {
  onSkip: () => void;
  onJoinCourt: () => void;
  onFinishGame: () => void;
};

export function Actions({ onSkip, onJoinCourt, onFinishGame }: ActionsProps) {
  const [gameStarted, setGameStarted] = useState(false);

  function handleJoinCourt() {
    onJoinCourt();
    setGameStarted(true);
  }

  if (!gameStarted) {
    return (
      <Wrapper>
        <Button label="Entrar em quadra" onClick={handleJoinCourt} />
        <Button label="Voltar para a fila" onClick={onSkip} variant="text" />
      </Wrapper>
    );
  }

  return (
    <GameStartedWrapper>
      <Button label="Finalizar partida" onClick={onFinishGame} />
      <div>
        <CenteredText variant="body2">
          Finalize a partida ao sair da quadra para dar lugar aos próximos
          atletas.
        </CenteredText>
        <CenteredText variant="body2">
          Você voltará automaticamente para o fim da fila.
        </CenteredText>
      </div>
    </GameStartedWrapper>
  );
}
```

> `handleJoinCourt` calls `onJoinCourt()` (emits to server) and then sets `gameStarted = true` locally, showing the finish button.

- [ ] **Step 2: Verify TypeScript compiles with no errors**

```bash
npx tsc --noEmit
```

Expected: no output (clean).

- [ ] **Step 3: Manually test the full flow**

  1. Start the dev server: `npm run dev`
  2. Open 4 tabs, log in, and join the queue in each.
  3. When the `YourTurn` screen appears, verify only those 4 tabs see it.
  4. In one tab, click **"Voltar para a fila"** — verify that tab goes back to the lobby and the player appears at the end of the queue.
  5. In another tab, click **"Entrar em quadra"** — verify the button changes to **"Finalizar partida"** and the player appears on the court in other tabs.
  6. Click **"Finalizar partida"** — verify the tab returns to the lobby and the player appears at the end of the queue.

- [ ] **Step 4: Commit**

```bash
git add src/pages/YourTurn/components/Actions/Actions.tsx
git commit -m "feat: wire skip, join court, and finish game actions"
```
