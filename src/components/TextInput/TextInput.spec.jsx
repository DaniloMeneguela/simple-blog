import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('Should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'test'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe('test');
  });

  it('Should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'test'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'test';

    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={'test'} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
