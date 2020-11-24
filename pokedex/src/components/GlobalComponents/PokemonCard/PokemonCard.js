import React from 'react';
import { CardContainer, Img, FlexContainer, Button } from './styles';
import { Route } from 'react-router-dom'

const PokemonCard = (props) => {

    const addToPokedex = (pokemon) => {
        window.alert(`O Pokemon ${pokemon.name} foi adicionado à sua Pokedex!`)
    }

    const removeFromPokedex = (pokemon) => {
        window.alert(`O Pokemon ${pokemon.name} foi removido da sua Pokedex!`)
    }

    return (
        <CardContainer>
            <h4>{props.pokemon.name}</h4>
            <Img src={props.pokemon.url} alt={`Foto do Pokemon ${props.pokemon.name}`}/>
            <FlexContainer>
            <Route exact path={"/"}>
                <Button onClick={()=> addToPokedex(props.pokemon)}>Adicionar a pokedex</Button>
            </Route>
            <Route exact path={"/pokedex"}>
                <Button onClick={()=> removeFromPokedex(props.pokemon)}>Remover da pokedex</Button>
            </Route>
            <Button>Ver detalhes</Button>
            </FlexContainer>
        </CardContainer>
    )
}

export default PokemonCard