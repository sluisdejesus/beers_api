import React from 'react';

const BeerSelector = ({beers, onBeerSelected}) => {

    const handleChange = event =>{
        onBeerSelected(event.target.value)
    }
    return (
        <select defaultValue="" onChange={handleChange}>
        <option value="" disabled>Choose a beer!</option>
        {beers.map(beer => {
            return (
                <option key={beer.index} value={beer.name}>{beer.name}</option>
            )
        })}


        </select>

    )
}

export default BeerSelector;