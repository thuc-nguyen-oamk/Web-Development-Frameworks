import React from 'react';
import './App.css';
import SearchResult from './components/SearchResult';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data.products,
      searchString: ""
    };
  }

  render() {
    return (
      <div className="App">
        <SearchResult products={this.state.products} />
      </div>
    );
  }

}

export default App;
