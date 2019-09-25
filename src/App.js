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
    filtered: []
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

  findByAlcohol = (id) => {
    if (!!this.state.drinks.cocktails){
        const filteredDrinks = this.state.drinks.cocktails.filter(cocktail => {
          return cocktail.alcohol_1_id === parseInt(id) || cocktail.alcohol_2_id === parseInt(id)
        }) 
        this.setState({
          filtered: filteredDrinks
        })
      }
    }

  filteredAlcohol = () => {
      if (!!this.state.drinks.cocktails){
       return this.state.drinks.cocktails.filter((cocktail) => {
        return cocktail.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
    }
  }

  createCards = (filtered) => {
    console.log(filtered)
    if (!!this.state.drinks.cocktails){
      return filtered.map((cocktail, i) => {
        return <Card cocktail={cocktail} key={i} />
      })
    }
  }
  
  displayCards = () => {
    if (this.state.filtered.length > 0){
      return this.createCards(this.state.filtered)
    } else {
      return this.createCards(this.filteredAlcohol())
    }
  }

  render(){
    return (
      <div className="App">
      <header>
        <h1>JOOSBar</h1>
      </header>
        <Filters updateSearch={this.updateCocktailSearch} 
                  alcohols={this.state.drinks.alcohol} 
                  cocktails={this.state.drinks.cocktails}
                  findByAlcohol={this.findByAlcohol}
                  />
        <div className="card-container">
          {this.displayCards()}
        </div>
      </div>
    )}
}

export default App;
