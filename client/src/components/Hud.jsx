import React from 'react';
import SearchBar from './SearchBar';
import ListButton from './ListButton';

export default React.createClass({
  getRoute(){
    return this.props.route.name || "Valitse reitti!";
  },
  render(){
    return(
      <div className="mainGUI">
        <SearchBar name={this.getRoute()}/>
        <ListButton/>
      </div>
    );
  }
});
