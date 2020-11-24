import React from 'react';
import Header from '../components/GlobalComponents/Header/Header';
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