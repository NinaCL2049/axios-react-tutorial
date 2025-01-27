import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import BeerCard from './BeerCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      beerCatalog: [],
      buttonText: false
      
    }
    
  }

  handleClick = () => {
    this.setState({buttonText: !this.state.buttonText})
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
            <BeerCard key={index} name={beer.name} brewery_type={beer.brewery_type} address_1={beer.address_1} city={beer.city} state={beer.state} postal_code={beer.postal_code} phone={beer.phone} website_url={beer.website_url} buttonText={this.state.buttonText ? "🥰 Liked!" : "🙂 Like?"} handleClick={this.handleClick}/> 
            
          )
        })}</ol>
        
    
        
      </header>
    </div>
  );
  }
}

export default App;
