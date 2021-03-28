import toRoman from './toRoman'

describe('toRoman()', () => {
    it.each([
        [1, "I"],
        [2, "II"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [10, "X"],
        [19, "XIX"],
        [39, "XXXIX"],
        [40, "XL"]
    ])
    ('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
});