import React from 'react';
import Header from '../components/GlobalComponents/Header';
import PokemonGrid from '../components/GlobalComponents/PokemonGrid/PokemonGrid';

const PokedexScreen=() => {
    return(
        <div>
            <Header />
            <PokemonGrid />
        </div>
    )
}

export default PokedexScreen