import Letter from './letter';

type Attempt = Letter[];

export const isCorrectAnswer = (attempt: Attempt): boolean =>
    attempt.reduce(
        (acc: boolean, attemptedLetter) => attemptedLetter.inPlace && acc,
        true
    );

export default Attempt;
