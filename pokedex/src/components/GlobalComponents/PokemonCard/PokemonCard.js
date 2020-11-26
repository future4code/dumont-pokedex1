import React, { useContext, useEffect, useState } from 'react';
import { CardContainer, Title, Img, FlexContainer, Button } from './styles';
import { Route } from 'react-router-dom'
import { goToPokemonDetails } from '../../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import GlobalStateContext from '../../../global/GlobalStateContext';

const PokemonCard = (props) => {
    const history = useHistory()
    const [pokemonDetails, setPokemonDetails] = useState("")
    const { states, setters } = useContext(GlobalStateContext)

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

    const addToPokedex = (selectedPokemon) => {
        const newPokedexList = [...states.pokedexList, selectedPokemon]

        const newPokemonList = states.pokemonList.filter((pokemon) => {
            return pokemon.name !== selectedPokemon.name
        })

        setters.setPokedexList(newPokedexList)
        setters.setPokemonList(newPokemonList)

        window.alert(`${selectedPokemon.name} foi adicionado à sua Pokédex!`)
    }

    const removeFromPokedex = (selectedPokemon) => {
        const newPokedexList = states.pokedexList.filter(pokemon => {
            return pokemon.name !== selectedPokemon.name
        })

        const newPokemonList = [...states.pokemonList, selectedPokemon]

        setters.setPokedexList(newPokedexList)
        setters.setPokemonList(newPokemonList)

        window.alert(`${selectedPokemon.name} foi removido da sua Pokédex!`)
    }

    const seeDetails = (pokemon) => {
        setters.setSelectedPokemon(pokemon)
        goToPokemonDetails(history)
    }

    return (
        <CardContainer>
            <Title>{props.pokemon.name}</Title>
            {pokemonDetails && <Img src={pokemonDetails.sprites.front_default} alt={`Foto do Pokémon ${props.pokemon.name}`}/>}
            <FlexContainer>
            <Route exact path={"/"}>
                <Button onClick={()=> addToPokedex(props.pokemon)}>Adicionar à Pokédex</Button>
            </Route>
            <Route exact path={"/pokedex"}>
                <Button onClick={()=> removeFromPokedex(props.pokemon)}>Remover da Pokédex</Button>
            </Route>
            <Button onClick={()=> seeDetails(props.pokemon)}>Ver detalhes</Button>
            </FlexContainer>
        </CardContainer>
    )
}

export default PokemonCard