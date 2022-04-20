/* eslint-disable max-len */
import validateAttempt from '../core/use-cases/validate-attempt';

describe('Validate attempt use-case', () => {
    const referenceWord = 'diplodocus';
    it('succeds if attempted word is equal to reference word', () => {
        const result = validateAttempt(referenceWord, 'diplodocus');

        expect(result).toEqual([
            { letter: 'd', inPlace: true, present: true },
            { letter: 'i', inPlace: true, present: true },
            { letter: 'p', inPlace: true, present: true },
            { letter: 'l', inPlace: true, present: true },
            { letter: 'o', inPlace: true, present: true },
            { letter: 'd', inPlace: true, present: true },
            { letter: 'o', inPlace: true, present: true },
            { letter: 'c', inPlace: true, present: true },
            { letter: 'u', inPlace: true, present: true },
            { letter: 's', inPlace: true, present: true },
        ]);
    });

    it('fails if attempted word does not start with same letter as reference word', () => {
        expect(() => validateAttempt(referenceWord, 'riplodocus')).toThrow(
            'start with the same letter'
        );
    });

    it('fails if attempted word is not the same length as reference word', () => {
        expect(() => validateAttempt(referenceWord, 'diplo')).toThrow(
            'not the same length'
        );
    });

    it("marks letters as 'present' if present in reference word", () => {
        const result = validateAttempt(referenceWord, 'drxxxxxxxi');

        expect(result).toEqual([
            { letter: 'd', inPlace: true, present: true },
            { letter: 'r', inPlace: false, present: false },
            { letter: 'x', inPlace: false, present: false },
            { letter: 'x', inPlace: false, present: false },
            { letter: 'x', inPlace: false, present: false },
            { letter: 'x', inPlace: false, present: false },
            { letter: 'x', inPlace: false, present: false },
            { letter: 'x', inPlace: false, present: false },
            { letter: 'x', inPlace: false, present: false },
            { letter: 'i', inPlace: false, present: true },
        ]);
    });

    it("marks as many instance of a letter as 'present' as in the reference word", () => {
        const result = validateAttempt(referenceWord, 'doiioiioii');
        expect(result).toEqual([
            { letter: 'd', inPlace: true, present: true },
            { letter: 'o', inPlace: false, present: true },
            { letter: 'i', inPlace: false, present: true },
            { letter: 'i', inPlace: false, present: false },
            { letter: 'o', inPlace: true, present: true },
            { letter: 'i', inPlace: false, present: false },
            { letter: 'i', inPlace: false, present: false },
            { letter: 'o', inPlace: false, present: false },
            { letter: 'i', inPlace: false, present: false },
            { letter: 'i', inPlace: false, present: false },
        ]);
    });

    it("marks letters as 'inPlace' if placed at the same place in both attempted word and reference word", () => {
        const result = validateAttempt(referenceWord, 'doplidacsr');

        expect(result).toEqual([
            { letter: 'd', inPlace: true, present: true },
            { letter: 'o', inPlace: false, present: true },
            { letter: 'p', inPlace: true, present: true },
            { letter: 'l', inPlace: true, present: true },
            { letter: 'i', inPlace: false, present: true },
            { letter: 'd', inPlace: true, present: true },
            { letter: 'a', inPlace: false, present: false },
            { letter: 'c', inPlace: true, present: true },
            { letter: 's', inPlace: false, present: true },
            { letter: 'r', inPlace: false, present: false },
        ]);
    });

    it("does not mark letter as 'present' if another instance of letter is in place", () => {
        const result = validateAttempt(referenceWord, 'dsccccccus');

        expect(result).toEqual([
            { letter: 'd', inPlace: true, present: true },
            // this one
            { letter: 's', inPlace: false, present: false },
            { letter: 'c', inPlace: false, present: false },
            { letter: 'c', inPlace: false, present: false },
            { letter: 'c', inPlace: false, present: false },
            { letter: 'c', inPlace: false, present: false },
            { letter: 'c', inPlace: false, present: false },
            { letter: 'c', inPlace: true, present: true },
            { letter: 'u', inPlace: true, present: true },
            // in place here
            { letter: 's', inPlace: true, present: true },
        ]);
    });
});
