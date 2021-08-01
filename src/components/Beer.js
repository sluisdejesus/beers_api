import React from 'react';

const Beer = ({beer}) => {
    if (!beer) {
        return null
    }
    return (
        <>
        <p>No beers are showing - why?</p>
        <p>Name: {beer.name}</p>
        </>
    )
}

export default Beer;