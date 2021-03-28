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
        [40, "XL"],
        [49, "XLIX"],
        [50, "L"],
        [51, "LI"],
        [90, "XC"],
        [100, "C"],
        [400, "CD"],
        [500, "D"],
        [900, "CM"],
        [1000, "M"],
    ])
    ('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
});