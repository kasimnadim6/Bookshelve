import { fireEvent, render, screen } from '@testing-library/react';
import Book from './Book';

describe('BookList Component', () => {
  it('should render BookList component', () => {
    render(<Book />);
    expect(Book).toBeTruthy();
  });
  it(`should receive book prop and displays it'`, () => {
    render(<Book book={{ id: 1, title: 'Sample Test' }} />);
    expect(screen.getByTestId('book-title')).toHaveTextContent('Sample Test');
  });
  it('should call updateReadingList function on button click', () => {
    const updateReadingListMocked = jest.fn();
    render(<Book updateReadingList={updateReadingListMocked} />);
    const btnEl = screen.getByTestId('btn-reading-status');
    expect(btnEl).toHaveTextContent('Add');
    fireEvent.click(btnEl);
    expect(updateReadingListMocked).toHaveBeenCalled();
  });
});
