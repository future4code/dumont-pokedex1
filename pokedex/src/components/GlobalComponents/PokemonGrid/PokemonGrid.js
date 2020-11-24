import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import { GridContainer } from './styles'

const PokemonGrid = () => {
    //lista estática de pokemons
    const pokemonList = [
        {   
            name:"bulbasaur",
            url:"https://picsum.photos/200/?a=1"
        },
        {
            name:"ivysaur",
            url:"https://picsum.photos/200/?a=2"
        },
        {
            name:"venusaur",
            url:"https://picsum.photos/200/?a=3"
        },
        {
            name:"charmander",
            url:"https://picsum.photos/200/?a=4"
        },
        {
            name:"charmeleon",
            url:"https://picsum.photos/200/?a=5"
        },
        {
            name:"charizard",
            url:"https://picsum.photos/200/?a=6"
        },
        {
            name:"squirtle",
            url:"https://picsum.photos/200/?a=7"
        },
        {
            name:"wartortle",
            url:"https://picsum.photos/200/?a=8"
        },
        {
            name:"blastoise",
            url:"https://picsum.photos/200/?a=9"
        },
        {
            name:"caterpie",
            url:"https://picsum.photos/200/?a=10"
        },
        {
            name:"metapod",
            url:"https://picsum.photos/200/?a=11"
        },
        {
            name:"butterfree",
            url:"https://picsum.photos/200/?a=12"
        },
        {
            name:"weedle",
            url:"https://picsum.photos/200/?a=13"
        },
        {
            name:"kakuna",
            url:"https://picsum.photos/200/?a=14"
        },
        {
            name:"beedrill",
            url:"https://picsum.photos/200/?a=15"
        },
        {
            name:"pidgey",
            url:"https://picsum.photos/200/?a=16"
        },
        {
            name:"pidgeotto",
            url:"https://picsum.photos/200/?a=17"
        },
        {
            name:"pidgeot",
            url:"https://picsum.photos/200/?a=18"
        },
        {
            name:"rattata",
            url:"https://picsum.photos/200/?a=19"
        },
        {
            name:"raticate",
            url:"https://picsum.photos/200/?a=20"
        }
    ]

    //lista estática de pokemons selecionados
    const pokedexList = [
        {
            name:"charizard",
            url:"https://picsum.photos/200/?a=6"
        },
        {
            name:"metapod",
            url:"https://picsum.photos/200/?a=11"
        },
        {
            name:"butterfree",
            url:"https://picsum.photos/200/?a=12"
        },
        {
            name:"kakuna",
            url:"https://picsum.photos/200/?a=14"
        },
        {
            name:"pidgeotto",
            url:"https://picsum.photos/200/?a=17"
        },
        {
            name:"pidgeot",
            url:"https://picsum.photos/200/?a=18"
        }
    ]

    return (
        <GridContainer>
            {pokemonList.map((pokemon, id) => {
                return <PokemonCard key={id} pokemon={pokemon} />
            })}
        </GridContainer>
    )
}

export default PokemonGrid