import React, { PropTypes } from 'react';

const ImageLayout = ({data, id}) => {
  <div className="informationBlock">
    <h2>{data.name}</h2>
    <p>{data.text}</p>
  </div>
  <div className="imageBlock">
    <h2>Clip:</h2>
    //TODO: insert image-element.
  </div>
}
