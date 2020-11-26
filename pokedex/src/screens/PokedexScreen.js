import React, { useContext } from 'react';
import Header from '../components/GlobalComponents/Header/Header';
import PokemonGrid from '../components/GlobalComponents/PokemonGrid/PokemonGrid';
import GlobalStateContext from '../global/GlobalStateContext';

const PokedexScreen=() => {

    const { states } = useContext(GlobalStateContext)
    
    return(
        <div>
            <Header />
            <PokemonGrid list={states.pokedexList}/>
        </div>
    )
}

export default PokedexScreen