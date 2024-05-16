export type Cell = 'X' | 'O' | null;

export type Row = [Cell, Cell, Cell];

export type Arena = [Row, Row, Row];

function isArenaFull(arena: Arena): boolean {
  return arena.flat().every((cell) => cell !== null);
}

function isWinner(arena: Arena, player: 'X' | 'O'): boolean {
  // Check rows
  for (const row of arena) {
    if (row.every((cell) => cell === player)) {
      return true;
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (arena[0][col] === player && arena[1][col] === player && arena[2][col] === player) {
      return true;
    }
  }

  // Check diagonals
  if (
    (arena[0][0] === player && arena[1][1] === player && arena[2][2] === player) ||
    (arena[0][2] === player && arena[1][1] === player && arena[2][0] === player)
  ) {
    return true;
  }

  return false;
}

function getBestMove(arena: Arena, aiPlayer: 'X' | 'O'): [number, number] | null {
  // If the arena is full or the AI has already won, return null
  if (isArenaFull(arena) || isWinner(arena, aiPlayer)) {
    return null;
  }

  // Find the best move by checking all possible moves
  let bestScore = -Infinity;
  let bestMove: [number, number] | null = null;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (arena[row][col] === null) {
        // Make a copy of the arena and make the move
        const newArena = arena.map((row) => row.slice()) as Arena;
        newArena[row][col] = aiPlayer;

        // Evaluate the score of the new arena
        const score = minimax(newArena, aiPlayer === 'X' ? 'O' : 'X');

        // Update the best move if the score is better
        if (score > bestScore) {
          bestScore = score;
          bestMove = [row, col];
        }
      }
    }
  }

  return bestMove;
}

function minimax(arena: Arena, currentPlayer: 'X' | 'O'): number {
  // If the current player has won or the arena is full, return the score
  if (isWinner(arena, currentPlayer)) {
    return currentPlayer === 'X' ? -1 : 1;
  } else if (isArenaFull(arena)) {
    return 0;
  }

  // Find the best score by checking all possible moves
  let bestScore = currentPlayer === 'X' ? -Infinity : Infinity;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (arena[row][col] === null) {
        // Make a copy of the arena and make the move
        const newArena = arena.map((row) => row.slice()) as Arena;
        newArena[row][col] = currentPlayer;

        // Evaluate the score of the new arena
        const score = minimax(newArena, currentPlayer === 'X' ? 'O' : 'X');

        // Update the best score if necessary
        bestScore = currentPlayer === 'X' ? Math.max(score, bestScore) : Math.min(score, bestScore);
      }
    }
  }

  return bestScore;
}
