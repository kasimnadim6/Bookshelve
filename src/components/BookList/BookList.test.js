import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Book from '../Book/Book';
import BookList from './BookList';

const mockBookComponent = jest.fn();
jest.mock('../Book/Book', () => (props) => {
  mockBookComponent(props);
  return <mock-bookComponent />;
});
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
    expect(mockBookComponent).toHaveBeenCalled();
    // expect(mockBookComponent).toHaveBeenCalledWith(
    //   expect.objectContaining({
    //     book: mock,
    //     inReadingList: false,
    //     updateReadingList: updateReadingListMocked,
    //   })
    // );
  });
});
