import { getLetterMatchCount } from './';

describe('getLetterMatchCount function', () => {
    const secretWord = 'party';

    it('returns the correct count when no letters match', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });

    it('returns the correct count when 3 letters match', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });

    it('returns the correct count when duplicate letters are in guessed word', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });

});
