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
    it('converts 1 to I', () => {
        const { getByLabelText, getByText } = render(<RomanConverter />)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "1"}});
        expect(() => {
            getByText('Roman: I')
        }).not.toThrow();
    });
    it('converts 5 to V', () => {
        const { getByLabelText, getByText } = render(<RomanConverter />)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "5"}});
        expect(() => {
            getByText('Roman: V')
        }).not.toThrow();
    });
});