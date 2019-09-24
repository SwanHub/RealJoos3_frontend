import React, { Component } from 'react'

export default class CocktailFilter extends Component {

    state = {
        search: ""
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    createOptions = () => {
        if (!!this.props.cocktails){
            return this.props.cocktails.map((cocktail) => {
                return(
                    <option value={cocktail.name}>{cocktail.name}</option>
                )
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateSearch(this.state.search)
    } 

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label> Search Cocktail!
                    <select onChange={this.handleChange}>
                        {this.createOptions()}
                    </select>
                </label>
                <input type="submit" value="Search that shit!"/>
                </form>
            </div>
        )
    }
}
