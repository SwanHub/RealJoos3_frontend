import React, { Component } from 'react';
import './App.css';
import Card from './Card.js'
import Filters from './Filters.js'
// this  is really right app.. 

class App extends Component {

  state =  {
    drinks: {},
    search: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/alcohols')
      .then(response => response.json())
      .then(json => {
        this.setState({
          drinks: json
        })
      })
  }

  updateSearch = (input) => {
    this.setState({
      search: input
    })
  }

  filteredAlcohol = () => {
      if (!!this.state.drinks.cocktails){
       return this.state.drinks.cocktails.filter((cocktail) => {
        return cocktail.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
    }
  }

  createCards = (filtered) => {
    if (!!this.state.drinks.cocktails && this.state.search !== ''){
      return filtered.map(cocktail => {
        return <Card cocktail={cocktail} />
      })
    }
  }

  render(){
    return (
      <div className="App">
      <header>
        JOOSBar
      </header>
        <Filters updateSearch={this.updateSearch} cocktails={this.state.drinks.cocktails}/>
        <div className="card-container">
          {this.createCards(this.filteredAlcohol())}
        </div>
      </div>
    )}
}

export default App;
