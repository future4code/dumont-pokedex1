import React from 'react';
import Header from '../components/GlobalComponents/Header';
import Images from '../components/PokemonDetailScreenComponents/Images';
import Moves from '../components/PokemonDetailScreenComponents/Moves';
import Stats from '../components/PokemonDetailScreenComponents/Stats';
import Types from '../components/PokemonDetailScreenComponents/Types';

const PokemonDetailsScreen=() => {
    return(
        <div>
            <Header />
            <Images />
            <Stats />
            <Types />
            <Moves />
        </div>
    )
}

export default PokemonDetailsScreen
