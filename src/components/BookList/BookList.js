import { Component } from 'react';
import Book from '../Book/Book';
import styles from './BookList.module.scss';
import { Books } from '../../data';

export default class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      readingList: [],
    };
    this.updateReadingList = this.updateReadingList.bind(this);
    this.bookExistInReadingList = this.bookExistInReadingList.bind(this);
  }
  componentDidMount() {
    this.setState({
      books: Books,
    });
  }
  updateReadingList(book, inReadingList) {
    if (!inReadingList) {
      this.setState({
        readingList: [...this.state.readingList, book],
      });
    } else {
      this.setState({
        readingList: this.state.readingList.filter((f) => f.id !== book.id),
      });
    }
  }
  bookExistInReadingList(book) {
    return !!this.state.readingList.find((b) => b.id === book.id);
  }
  render() {
    const { books, readingList } = this.state;
    return (
      <section className={styles['book-list-container']}>
        <h1 data-testid="header" className={styles.header}>
          Welcome to My Favorite Book Portal
        </h1>
        <h2 className={styles.title}>Book Shelve</h2>
        <div className={styles['book-list']}>
          {books.length &&
            books.map((book) => (
              <Book
                key={book.id}
                book={book}
                inReadingList={this.bookExistInReadingList(book)}
                updateReadingList={this.updateReadingList}
              />
            ))}
        </div>
        {readingList.length ? (
          <div className={styles.readingList}>
            <h2 data-testid="reading-list" className={styles.title}>
              Reading List
            </h2>
            <div className={styles['book-list']}>
              {readingList.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  inReadingList={this.bookExistInReadingList(book)}
                  updateReadingList={this.updateReadingList}
                />
              ))}
            </div>
          </div>
        ) : (
          <p
            data-testid="no-reading-list"
            className={styles.title}
            style={{ textAlign: 'center', marginTop: '5rem' }}
          >
            Reading List Is Empty
          </p>
        )}
      </section>
    );
  }
}
