import Attempt from '../models/attempt';
import { Letter } from '../models/letter';

const checkFirstLetter = (
    referenceWord: string,
    attemptedWord: string
): void => {
    if (!referenceWord.startsWith(attemptedWord[0])) {
        throw new Error(
            'Attempted word does not start' +
                ' with the same letter as reference word.'
        );
    }
};

const checkWordLength = (
    referenceWord: string,
    attemptedWord: string
): void => {
    if (referenceWord.length !== attemptedWord.length) {
        throw new Error(
            'Attempted word is not the same length as reference word.'
        );
    }
};

const getLetterCount = (
    referenceWord: string,
    attemptedLetter: string
): number =>
    referenceWord.split('').filter((char) => char === attemptedLetter).length;

const checkLetterInPlace = (
    referenceWord: string,
    attemptedLetter: string,
    attemptedLetterIndex: number
) => referenceWord.split('')[attemptedLetterIndex] === attemptedLetter;

const checkInPlaceLetters = (
    referenceWord: string,
    attemptedWord: string
): Attempt =>
    attemptedWord.split('').map((letter, index) => {
        const isInPlace = checkLetterInPlace(referenceWord, letter, index);

        return { letter, inPlace: isInPlace, present: isInPlace };
    });

const checkPresentLetters = (
    referenceWord: string,
    attemptsInPlace: Attempt
): Attempt =>
    attemptsInPlace.reduce((attempts: Attempt, attempt: Letter) => {
        const { letter, inPlace } = attempt;

        if (inPlace) {
            return [...attempts, attempt];
        }

        const letterCountInReferenceWord = getLetterCount(
            referenceWord,
            letter
        );

        if (letterCountInReferenceWord <= 0) {
            return [...attempts, { ...attempt, present: false }];
        }

        const sameLetterAlreadyInPlace = attemptsInPlace.filter(
            (attemptLetter) =>
                attemptLetter.inPlace && attemptLetter.letter === letter
        ).length;

        const sameLetterAlreadyPresent = attempts.filter(
            (attemptLetter) =>
                attemptLetter.present && attemptLetter.letter === letter
        ).length;

        return [
            ...attempts,
            {
                ...attempt,
                present:
                    letterCountInReferenceWord >
                    sameLetterAlreadyInPlace + sameLetterAlreadyPresent,
            },
        ];
    }, []);

const validateAttempt = (
    referenceWord: string,
    attemptedWord: string
): Attempt => {
    checkFirstLetter(referenceWord, attemptedWord);
    checkWordLength(referenceWord, attemptedWord);

    const attemptsInPlace = checkInPlaceLetters(referenceWord, attemptedWord);

    return checkPresentLetters(referenceWord, attemptsInPlace);
};

export default validateAttempt;
