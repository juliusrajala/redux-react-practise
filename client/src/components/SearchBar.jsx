import React from 'react';

export default React.createClass({
  getRoute(){
    return this.props.name;
  },
  render(){
    return(
      <div className="searchBar">
        //Search bar here
        {this.getRoute()}
      </div>
    );
  }
});
