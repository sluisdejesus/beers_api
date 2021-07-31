import React from 'react';

const Beer = ({beer}) => {
    // if (!beer) {
    //     return null
    // }
    return (
        <>
        <p>Name: {beer.name}</p>
        </>
    )
}

export default Beer;