import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter handleChange={handleFilterChange} />
        <FilteredFruitList
          filter={props.selectedFilter} />
      </div>
    );
  }


export default FruitBasket;

  const handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }


FruitBasket.defaultProps = {
  filters: [],
  currentFilter: '',
  fruit: [],
  updateFilterCallback: ''
}
