import React, { Component } from 'react'

export default class AlcoholFilter extends Component {
    
    state = {
        search: "",
        alcoholId: 0
    }

    handleChange = (event) => {
        this.setState({
            alcoholId: event.target.value
        })
    }

    createOptions = () => {
        if (!!this.props.alcohols){
            return this.props.alcohols.map((alcohol) => {
                return(
                    <option value={alcohol.id}>{alcohol.name}</option>
                )
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.findByAlcohol(this.state.alcoholId)
    } 

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label> Search Alcohol!
                    <select onChange={this.handleChange}>
                        {this.createOptions()}
                    </select>
                </label>
                <input type="submit" value="Search drink by alc!!"/>
                </form>
                
            </div>
        )
    }
}
