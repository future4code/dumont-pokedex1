import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import { GridContainer } from './styles'

const PokemonGrid = (props) => {

    return (
        <GridContainer>
            {props.list && props.list.map((pokemon, id) => {
                return <PokemonCard key={id} pokemon={pokemon} />
            })}
        </GridContainer>
    )
}

export default PokemonGrid