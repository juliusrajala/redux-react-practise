import React from 'react';
import SearchBar from './SearchBar';
import ListButton from './ListButton';
import {connect} from 'react-redux';

const Hud = ({route, items}) => {
  render(){
    return(
      <div className="mainGUI">
        <h1>Test title</h1>
        <SearchBar routeName={route}/>
        //TODO: + Muut tarvittavat komponentit näkymään
      </div>
    );
  }
};

const mapStateToProps(state){
  return{
    points: state.get('points'),
    route: state.get('route')
  }
}

export const HudContainer = connect(mapStateToProps)(Hud);
