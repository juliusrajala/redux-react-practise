import React from 'react';
import ListButton from './ListButton';
import Book from './Book';

export default React.createClass({
  fetchLibrary(){
    return this.props.library;
  },
  render(){
    {this.fetchLibrary().map((book) =>
      <Book data={book}/>
    }
  }
});
