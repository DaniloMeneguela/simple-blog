import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('Should render the button with the text "Load More"', () => {
    render(<Button text="Load more" />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('Should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" isDisabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('Should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" isDisabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" isDisabled={false} onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
