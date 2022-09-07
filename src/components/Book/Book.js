import React from 'react';
import styles from './Book.module.scss';

const Book = (props) => {
  const { book, inReadingList, updateReadingList } = props;
  return (
    <figure className={styles.book}>
      <img className={styles.image} src={book?.cover_image} alt={book?.title} />
      <figcaption data-testid="book-title">{book?.title}</figcaption>
      <button
        data-testid="btn-reading-status"
        className={`${styles['btn']} ${
          inReadingList ? styles.btn__add : styles.btn__remove
        }`}
        onClick={() => updateReadingList(book, inReadingList)}
      >
        {!inReadingList ? 'Add' : 'Remove'}
      </button>
    </figure>
  );
};

export default Book;
