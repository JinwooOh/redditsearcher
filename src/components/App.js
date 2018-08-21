import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ResultList from './ResultList';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ResultList />
      </div>
    );
  }
}
export default App;
