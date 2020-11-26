import React, { useState, useEffect } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { BASE_URL } from '../constants/url';
import axios from 'axios';

const GlobalState = (props) => {

    const [pokemonList, setPokemonList] = useState([])
    const [pokedexList, setPokedexList] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState({})

    const getPokemons = () => {
        axios
            .get(BASE_URL)
            .then((response) => {
                setPokemonList(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        requests.getPokemons();
    },[]);

    const states = { pokemonList, pokedexList, selectedPokemon }
    const setters = { setPokemonList, setPokedexList, setSelectedPokemon }
    const requests = { getPokemons }

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;