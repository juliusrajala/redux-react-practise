import React, { PropTypes } from 'react';

const Book = ({data, id}) => {
  if(data.video !== null){
    return <VideoLayout/>
  }else{
    return <ImageLayout/>
  }
}

Book.propTypes = {
  //TODO: Types of props.
}

export default Book;
