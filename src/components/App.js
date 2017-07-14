import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }
  render() {
    return <FruitBasket selectedFilter={this.state.currentFilter} />;
  }


}








export default App;
