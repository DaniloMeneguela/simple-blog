import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('Should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', 'img/img.png');

    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();

    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
