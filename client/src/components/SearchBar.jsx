import React from 'react';

const SearchBar = ({route}) => {
  return(
    <div className='searchBar'>
      <h2>Searchbar</h2>
      <form>
        <input className='routeBar' type='text' placeholder={route.name}/>
      </form>
    </div>
  );
}

export default SearchBar;
