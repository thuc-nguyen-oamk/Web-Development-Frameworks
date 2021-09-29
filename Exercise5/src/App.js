import React from 'react';
import './App.css';
import SearchResult from './components/SearchResult';
import axios from 'axios';
import AdminView from './components/AdminView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [], searchString: "", adminMode: false };
  }

  toggleAdminMode = () => this.setState({ adminMode: !this.state.adminMode });

  getDataAndUpdateAppState = () => {
    axios.get('http://localhost:4000/products')
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => console.error(error));
  }

  render() {
    let output;

    if (this.state.adminMode) {
      output =
        <div className="App">
          <button onClick={this.toggleAdminMode}>Disable Admin Mode</button>
          <AdminView products={this.state.products} getDataAndUpdateAppState={this.getDataAndUpdateAppState} />
        </div>;
    } else {
      output =
        <div className="App">
          <button onClick={this.toggleAdminMode}>Admin Mode</button>
          <SearchResult products={this.state.products} />
        </div>;
    }

    return output;
  }

  componentDidMount() {
    this.getDataAndUpdateAppState();
  }
}

export default App;
