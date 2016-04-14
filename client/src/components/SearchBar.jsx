import React from 'react';

export default React.createClass({
  getRoute(){
    return this.props.name;
  },
  render(){
    return(
      <div className='searchBar'>
        //Search bar here
        <form>
          <input className='routeBar' type='text' placeholder={this.getRoute()}>
        </form>
      </div>
    );
  }
});
