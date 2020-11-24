import React from 'react';
import { CardContainer, Img, FlexContainer, Button } from './styles';

const PokemonCard = (props) => {
    return (
        <CardContainer>
            <h4>{props.pokemon.name}</h4>
            <Img src={props.pokemon.url} alt={`Foto do Pokemon ${props.pokemon.name}`}/>
            <FlexContainer>
                <Button>Adicionar a pokedex</Button>
                <Button>Ver detalhes</Button>
            </FlexContainer>
        </CardContainer>
    )
}

export default PokemonCard