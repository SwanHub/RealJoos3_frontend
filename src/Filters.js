import React from 'react'
import AlcoholFilter from './filterComponents/AlcoholFilter.js'
import CocktailFilter from './filterComponents/CocktailFilter.js'

export default function Filters(props) {
    return (
        <div className="filter-container">
            <AlcoholFilter alcohols={props.alcohols} findByAlcohol={props.findByAlcohol}/>
            <CocktailFilter updateSearch={props.updateSearch} cocktails={props.cocktails}/>
        </div>
    )
}
