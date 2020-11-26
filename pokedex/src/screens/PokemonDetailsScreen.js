import React from 'react';
import Header from '../components/GlobalComponents/Header/Header';
import Images from '../components/PokemonDetailScreenComponents/Images';
import Moves from '../components/PokemonDetailScreenComponents/Moves';
import Stats from '../components/PokemonDetailScreenComponents/Stats';
import Types from '../components/PokemonDetailScreenComponents/Types';
import styled from 'styled-components'

const PokemonDetailsScreenContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const PokemonDetailsScreen=() => {
    return(
        <div>
            <Header />
            <PokemonDetailsScreenContainer>    
                <Images />
                <Stats />

                <div>
                    <Types />
                    <Moves />
                </div>

            </PokemonDetailsScreenContainer>

        </div>
    )
}

export default PokemonDetailsScreen
