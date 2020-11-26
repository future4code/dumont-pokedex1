import React, { useContext, useEffect } from 'react';
import Header from '../components/GlobalComponents/Header/Header';
import PokemonGrid from '../components/GlobalComponents/PokemonGrid/PokemonGrid';
import GlobalStateContext from '../global/GlobalStateContext';

const HomeScreen=() => {

    const { states, requests } = useContext(GlobalStateContext)
    
    useEffect(() => {
        requests.getPokemons();
    },[]);

    return(
        <div>
            <Header />
            <PokemonGrid list={states.pokemonList} />
        </div>
    )
}

export default HomeScreen