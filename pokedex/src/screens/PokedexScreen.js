import React, { useContext } from 'react';
import Header from '../components/GlobalComponents/Header/Header';
import PokemonGrid from '../components/GlobalComponents/PokemonGrid/PokemonGrid';
import GlobalStateContext from '../global/GlobalStateContext';
import styled from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PokedexScreen=() => {

    const { states } = useContext(GlobalStateContext)
    
    return(
        <div>
            <Header />
            <FlexBox>
                {states.pokedexList.length !== 0 ? <PokemonGrid list={states.pokedexList}/> : 
                <p>Você ainda não adicionou Pokémons a sua Pokédex!</p>}
            </FlexBox>
        </div>
    )
}

export default PokedexScreen