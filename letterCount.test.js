// 3 functions describe(). test() expect()
const LetterCount = require('./letterCount');

describe('Letter Count Test', () => {
    test('As a user I want to count the characters in a string', () => {
        expect(LetterCount('awesome', 'e')).toEqual(2);
    });

    test("Negative Test for Letter Count", () => {
        expect(LetterCount('Hello', 'o')).not.toBe(0); 
    });
});

