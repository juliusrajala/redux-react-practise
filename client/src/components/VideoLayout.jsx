import React, { PropTypes } from 'react';

const VideoLayout = ({data, id}) => {
  <div className="informationBlock">
    <h2>{data.name}</h2>
    <p>{data.text}</p>
  </div>
  <div className="videoBlock">
    <h2>Clip:</h2>
    //TODO: insert video-element.
  </div>
}
