import React, { Component } from 'react';

const FilteredFruitList = (props) => {
  const list =  props.filter ? props.fruit.filter(i => i.fruit_type === props.filter) : props.fruit
    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
  }

export default FilteredFruitList;

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: ''
}
