import { clenaup, render } from '@testing-library/react'

const RomanConverter = () => {
    return <label>Arabic: <input type="number"></input></label>;
}

describe('<RomanConverter />', () => {
    it('has a input field', () => {
        const { getByLabelText} = render(<RomanConverter />)
        expect(() => {
            getByLabelText(/arabic/i)
        }).not.toThrow();
    });
});