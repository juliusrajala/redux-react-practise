import React from 'react';
import SearchBar from './SearchBar';
import ListButton from './ListButton';
import Api from '../api/Api';

export default React.createClass({
  getRoute(){
    return this.props.route.name || <p>Valitse reitti!</p>;
  },
  getData(){
    //TODO: return PoI list by route
    return ['Test1', 'Test2', 'Test3']
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
