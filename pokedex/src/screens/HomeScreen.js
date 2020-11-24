import React from 'react';
import Header from '../components/GlobalComponents/Header';
import PokemonGrid from '../components/GlobalComponents/PokemonGrid';

const HomeScreen=() => {
    return(
        <div>
            <Header />
            <PokemonGrid />
        </div>
    )
}

export default HomeScreen