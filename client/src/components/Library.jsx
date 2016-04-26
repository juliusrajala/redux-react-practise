import React, {PropTypes} from 'react';
import ListButton from './ListButton';
import Book from './Book';


const Library = ({onBookClick, books}) => {
  <ul>
    {books.map((book) =>
      <ListButton key={book.id} {...todo} onClick={() => onBookClick(book.id)}/>
    )}
  </ul>
};

Library.propTypes = {
  onBookClick: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default Library
