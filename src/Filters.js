import React from 'react'
import AlcoholFilter from './filterComponents/AlcoholFilter.js'
import CocktailFilter from './filterComponents/CocktailFilter.js'
import RandomFilter from './filterComponents/RandomFilter.js'

export default function Filters(props) {
    return (
        <div className="filter-container">
            <AlcoholFilter />
            <CocktailFilter updateSearch={props.updateSearch} cocktails={props.cocktails}/>
            <RandomFilter />
        </div>
    )
}
