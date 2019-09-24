import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.cocktail.url} alt={props.cocktail.name} />
            {props.cocktail.name}
        </div>
    )
}
