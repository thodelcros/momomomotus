import Attempt from './attempt';

const MAX_ALLOWED_ATTEMPTS = 6;

interface Game {
    referenceWord: string | null;
    attempts: Attempt[];
    error: string | null;
    win: boolean;
    loose: boolean;
}

export const isLastPossibleAttempt = (game: Game) => {
    const attemptCount = game.attempts.length;

    return attemptCount >= MAX_ALLOWED_ATTEMPTS;
};

export default Game;
