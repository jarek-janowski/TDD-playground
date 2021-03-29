import { fireEvent, render } from '@testing-library/react';
import RomanConverter from './RomanConverter'

describe('<RomanConverter />', () => {

    it('has a input field', () => {
        const { getByLabelText} = render(<RomanConverter />)
        expect(() => {
            getByLabelText(/arabic/i)
        }).not.toThrow();
    });
    it('shows no roman by default', () => {
        const { getByText, getByLabelText, getByRole} = render(<RomanConverter />)
        expect(() => {
            getByText('none')
        }).not.toThrow();
    });
    it('does not convert 0 to any roman number', () => {
        const { getByLabelText, getByText } = render(<RomanConverter />)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "0"}});
        expect(() => {
            getByText('none')
        }).not.toThrow();
    });
    it('converts 2019 to MMXIX', () => {
        const { getByLabelText, getByText } = render(<RomanConverter />)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "2019"}});
        expect(() => {
            getByText('MMXIX')
        }).not.toThrow();
    });
    it('does not convert 4000+ to any roman number', () => {
        const { getByLabelText, getByText } = render(<RomanConverter />)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "4000"}});
        expect(() => {
            getByText('try something below 4000')
        }).not.toThrow();
    });
});