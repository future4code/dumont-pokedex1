import React, { useEffect, useState } from 'react';
import { CardContainer, Img, FlexContainer, Button } from './styles';
import { Route } from 'react-router-dom'
import { goToPokemonDetails } from '../../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const PokemonCard = (props) => {
    const history = useHistory()

    const [pokemonDetails, setPokemonDetails] = useState("")

    useEffect(() => {
        getPokemonDetails(props.pokemon.url);
    }, [props.pokemon.url]);

    const getPokemonDetails = (url) => {
        axios
            .get(url)
            .then((response) => {
                setPokemonDetails(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const addToPokedex = (pokemon) => {
        window.alert(`O Pokemon ${pokemon.name} foi adicionado à sua Pokedex!`)
    }

    const removeFromPokedex = (pokemon) => {
        window.alert(`O Pokemon ${pokemon.name} foi removido da sua Pokedex!`)
    }

    return (
        <CardContainer>
            <h4>{props.pokemon.name}</h4>
            {pokemonDetails && <Img src={pokemonDetails.sprites.front_default} alt={`Foto do Pokemon ${props.pokemon.name}`}/>}
            <FlexContainer>
            <Route exact path={"/"}>
                <Button onClick={()=> addToPokedex(props.pokemon)}>Adicionar a pokedex</Button>
            </Route>
            <Route exact path={"/pokedex"}>
                <Button onClick={()=> removeFromPokedex(props.pokemon)}>Remover da pokedex</Button>
            </Route>
            <Button onClick={()=> goToPokemonDetails(history)}>Ver detalhes</Button>
            </FlexContainer>
        </CardContainer>
    )
}

export default PokemonCard