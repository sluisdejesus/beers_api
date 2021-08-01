import React, { useEffect, useState } from 'react';
import Beer from '../components/Beer';
import BeerSelector from '../components/BeerSelector';


const BeerContainer = () => {

    const [beers, setBeers] = useState([])
    const [selectedBeerId, setSelectedBeerId] = useState('')

    useEffect(() => {
        getBeers()
    }, [])

    const getBeers = () => {
        fetch(`https://api.punkapi.com/v2/beers`)
        .then (res => res.json())
        .then(beersData => setBeers(beersData))
    }


const handleBeerSelected = id => {
    setSelectedBeerId(id)
}

const selectedBeer = beers.find(beer => beer.id === selectedBeerId)

    return (
        <>
        <h3>This is the beer container</h3>
        <p>We have {beers.length} beers on record!</p>
        <BeerSelector beers = {beers} onBeerSelected = {handleBeerSelected}/>
        <Beer beer = {selectedBeer}/>
        </>
    )};

export default BeerContainer;