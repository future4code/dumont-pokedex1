import React from 'react';
import Header from '../components/Header';
import PokedexGrid from '../components/PokedexScreenComponents/PokedexGrid'

const PokedexScreen=() => {
    return(
        <div>
            <Header />
            <PokedexGrid />
        </div>
    )
}

export default PokedexScreen