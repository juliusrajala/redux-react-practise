import React from 'react';

const ListButton = ({book, onClick}) => {
  <li
    onClick={onClick}
    className="libraryList">
    {Book.name}
  </li>
}

ListButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  book: PropTypes.obj.isRequired
}

export default ListButton;
