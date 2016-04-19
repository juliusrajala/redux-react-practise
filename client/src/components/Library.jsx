import React from 'react';
import ListButton from './ListButton';
import Book from './Book';

export default React.createClass({
  fetchLibrary(){
    return ["Turku", "on", "kiva"]
  },
  render(){
    return(
      {this.fetchLibrary().map((book) =>
        //<Book data={book}/>
        <p>book</p>
      }
    )
  }
});

const getLibraryBooks = (points, )
