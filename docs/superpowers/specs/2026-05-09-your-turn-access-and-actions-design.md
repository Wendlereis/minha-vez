# YourTurn Screen — Access Control & Wired Actions

**Date:** 2026-05-09  
**Status:** Approved

## Problem

The `YourTurn` screen is shown to every connected client when a `court:next-game` event fires, regardless of whether that client is one of the four athletes selected for the next game. Additionally, the "Voltar para a fila" (skip), "Entrar em quadra" (join court), and "Finalizar partida" (finish game) buttons have empty `onClick` handlers and do nothing.

## Approach

Reuse existing server socket events (`lobby:join`, `lobby:leave`, `court:join`, `court:leave`) with no server changes. Fix access control on the client by checking `socket.id` against the received player list before navigating.

## Architecture

All changes are confined to the frontend (`minha-vez`). No server changes required.

### Files changed

- `src/App.tsx` — fix `handleNextGame`, add `handleSkip`, `handleJoinCourt`, `handleFinishGame`, pass callbacks to `YourTurn`
- `src/pages/YourTurn/YourTurn.tsx` — accept and pass through new action props
- `src/pages/YourTurn/components/Actions/Actions.tsx` — accept and wire callbacks

## Design Details

### 1. Access Control Fix

`socket.id` is used by the server as each athlete's `id`. When `court:next-game` fires, `handleNextGame` in `App.tsx` checks whether the current socket's ID appears in the `game` array before navigating to `'your-turn'`. Clients not in the list are unaffected.

```ts
function handleNextGame(game: Athlete[]) {
  setNextGame(game);
  if (game.some(a => a.id === socket.id)) {
    setCurrentPage('your-turn');
  }
}
```

### 2. Skip (Voltar para a fila)

Emits `lobby:leave` followed immediately by `lobby:join` (with user data), then navigates back to `'lobby'`. This atomically removes the athlete from their current queue position and re-adds them at the end. Uses existing server events; no new event needed.

```ts
function handleSkip() {
  socket.emit('lobby:leave');
  socket.emit('lobby:join', user);
  setCurrentPage('lobby');
}
```

### 3. Join Court (Entrar em quadra)

Emits `court:join` with the user's `name` and `gender`. The server adds the player to the court and removes them from the queue. On the client, `gameStarted` flips to `true`, showing the "Finalizar partida" UI.

```ts
function handleJoinCourt() {
  socket.emit('court:join', user);
}
```

### 4. Finish Game (Finalizar partida)

Emits `court:leave` with the user's `name` and `gender`. The server removes the player from the court and re-adds them to the end of the queue. The client navigates back to `'lobby'`.

```ts
function handleFinishGame() {
  socket.emit('court:leave', user);
  setCurrentPage('lobby');
}
```

### 5. Prop Flow

```
App
 └─ handleSkip, handleJoinCourt, handleFinishGame
     └─ YourTurn (onSkip, onJoinCourt, onFinishGame)
         └─ Actions (onSkip, onJoinCourt, onFinishGame)
```

`YourTurn` receives all three callbacks as props and forwards them to `Actions`. `Actions` wires them to the respective buttons.

## Error Handling

- If `user` is `null` when skip/join/finish is triggered, the emit is skipped (guard in each handler). In practice this cannot happen since the user must have logged in to reach this screen.
- If the `court:next-game` game array is empty, no navigation occurs (existing guard: `if (game.length)`).

## Testing

- Manually verify that clients NOT in the `next-game` list do not navigate to `YourTurn`
- Manually verify "Voltar para a fila" sends the player to the end of the queue and shows the lobby
- Manually verify "Entrar em quadra" moves the player to the court and shows the "Finalizar partida" UI
- Manually verify "Finalizar partida" removes the player from the court, re-queues them, and shows the lobby
