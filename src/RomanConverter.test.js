import { clenaup, fireEvent, render } from '@testing-library/react';
import RomanConverter from './RomanConverter'

describe('<RomanConverter />', () => {

    it('has a input field', () => {
        const { getByLabelText} = render(<RomanConverter />)
        expect(() => {
            getByLabelText(/arabic/i)
        }).not.toThrow();
    });
    it('shows no roman by default', () => {
        const { getByText} = render(<RomanConverter />)
        expect(() => {
            getByText('Roman: none')
        }).not.toThrow();
    });
    it.skip('converts 2019 to MMXIX', () => {
        const { getByLabelText, getByText } = render(<RomanConverter />)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "2019"}});
        expect(() => {
            getByText('Roman: MMXIX')
        }).not.toThrow();
    });
});