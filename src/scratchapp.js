import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import BeerCard from './BeerCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      beerCatalog: []
    }
  }

  componentDidMount() {
  axios.get('https://api.openbrewerydb.org/v1/breweries')
  .then( res => {
    const beerCatalog = res.data
    this.setState({ beerCatalog })
  }) 
  }

  render() {
  
  return (
    <div className="App">
      <header className="App-header">
        <ol>{this.state.beerCatalog.map((beer, index) => {
          return (
            <BeerCard key={index} name={beer.name} />
            
          )
        })}</ol>
        
        <p>
          I'm nothing if not vacant.
        </p>
        
      </header>
    </div>
  );
  }
}

export default App;