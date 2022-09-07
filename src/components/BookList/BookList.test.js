import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import BookList from './BookList';

const mockBookComponent = jest.fn();

describe('BookList Component', () => {
  it('should render BookList component', () => {
    render(<BookList />);
    expect(BookList).toBeTruthy();
  });
  it(`should have text 'Welcome to My Favorite Book Portal'`, () => {
    render(<BookList />);
    expect(screen.getByTestId('header')).toHaveTextContent(
      'Welcome to My Favorite Book Portal'
    );
  });
  it('should have right BookList Snapshot', () => {
    const snapshotJSON = renderer.create(<BookList />).toJSON();
    expect(snapshotJSON).toMatchSnapshot();
  });
  it(`should have text 'Reading List Is Empty'`, () => {
    render(<BookList />);
    expect(screen.getByTestId('no-reading-list')).toHaveTextContent(
      'Reading List Is Empty'
    );
  });

  // TODO:Test updateReadingList method which updates state[readingList] which will show readingList book
  it(`should have 'Reading List'`, () => {
    const mock = [
      {
        id: 1,
        author_id: 4,
        title: 'Norwegian Wood',
        cover_image:
          'http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec',
        pages: 296,
        releaseDate: '1987',
        isbn: 'hj846',
      },
    ];
    const updateReadingListMocked = jest.fn();
    render(<BookList />);
  });
});
