import React, { Component } from 'react';
import './App.css';
import Card from './Card.js'
import Filters from './Filters.js'
// import { create } from 'istanbul-reports';
// this  is really right app.. 

class App extends Component {

  state =  {
    drinks: {},
    search: '',
    filtered: true
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

  updateCocktailSearch = (input) => {
    this.setState({
      search: input
    })
  }

  // findByAlcohol = (id) => {
  //   if (!!this.state.drinks.cocktails){
  //       const filtered = state.drinks.cocktails.filter(cocktail => {
  //         return cocktail.alcohol_1_id === parseInt(id) || cocktail.alcohol_2_id === parseInt(id)
  //       }) 
  //       this.displayCards()
  //     }
  //   }

  // createFilteredCards = (filtered) => {
  //   if (this.state.filtered){
  //     return filtered.map(cocktail => {
  //       return <Card cocktail={cocktail} />
  //     })
  //   }
  // }

  filteredAlcohol = () => {
      if (!!this.state.drinks.cocktails){
       return this.state.drinks.cocktails.filter((cocktail) => {
        return cocktail.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
    }
  }

  createCards = (filtered) => {
    if (!!this.state.drinks.cocktails && this.state.search !== ''){
      return filtered.map((cocktail, i) => {
        return <Card cocktail={cocktail} key={i} />
      })
    }
  }
  
  // displayCards = (toggle) => {
  //   if (!!toggle){
  //     console.log('filtering')
  //     return this.createFilteredCards(this.findByAlcohol()) 
  //   } else {
  //     return 
  //   }
  // }

  render(){
    return (
      <div className="App">
      <header>
        JOOSBar
      </header>
        <Filters updateSearch={this.updateCocktailSearch} 
                  alcohols={this.state.drinks.alcohol} 
                  cocktails={this.state.drinks.cocktails}
                  findByAlcohol={this.findByAlcohol}
                  />
        <div className="card-container">
          {this.createCards(this.filteredAlcohol())}
        </div>
      </div>
    )}
}

export default App;
