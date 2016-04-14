import React from 'react';

export default React.createClass({
  getRoute(){
    return this.props.name;
  },
  render(){
    return(
      <div className='searchBar'>
        <h2>Searchbar</h2>
        <p> what</p>
        // <form>
        //   <input className='routeBar' type='text' placeholder={this.getRoute()}/>
        // </form>
      </div>
    );
  }
});
