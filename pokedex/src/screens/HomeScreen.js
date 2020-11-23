import React from 'react';
import Header from '../components/Header';
import PokemonGrid from '../components/HomeScreenComponents/PokemonGrid';

const HomeScreen=() => {
    return(
        <div>
            <Header />
            <PokemonGrid />
        </div>
    )
}

export default HomeScreen