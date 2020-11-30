import React, { useContext } from 'react';
import Header from '../components/GlobalComponents/Header/Header';
import PokemonGrid from '../components/GlobalComponents/PokemonGrid/PokemonGrid';
import GlobalStateContext from '../global/GlobalStateContext';

const HomeScreen=() => {

    const { states } = useContext(GlobalStateContext)

    return(
        <div>
            <Header />
            {states.pokemonList.length !== 0 && <PokemonGrid list={states.pokemonList} />}
        </div>
    )
}

export default HomeScreen