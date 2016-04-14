import React from 'react';
import SearchBar from './SearchBar';
import ListButton from './ListButton';
import {connect} from 'react-redux';
import Api from '../api/Api';

export const Hud = React.createClass({
  getRoute(){
    return this.props.route || "Valitse reitti!";
  },
  getData(){
    return this.props.points || [];
  },
  render(){
    return(
      <div className="mainGUI">
        <SearchBar routeName={this.getRoute()}/>
        <ListButton/>
      </div>
    );
  }
});

function mapStateToProps(state){
  return{
    points: state.get('points'),
    route: state.get('route')
  }
}

export const HudContainer = connect(mapStateToProps)(Hud);
