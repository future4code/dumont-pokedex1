import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { BASE_URL } from '../constants/url';
import axios from 'axios';

const GlobalState = (props) => {

    const [pokemonList, setPokemonList] = useState([])
    const [pokedexList, setPokedexList] = useState([])

    const getPokemons = () => {
        axios
            .get(BASE_URL)
            .then((response) => {
                setPokemonList(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const states = { pokemonList, pokedexList }
    const setters = { setPokemonList, setPokedexList }
    const requests = { getPokemons }

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;