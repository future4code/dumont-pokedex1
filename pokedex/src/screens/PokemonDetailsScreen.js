import React, { useContext, useState, useEffect } from 'react';
import Header from '../components/GlobalComponents/Header/Header';
import Images from '../components/PokemonDetailScreenComponents/Images';
import Moves from '../components/PokemonDetailScreenComponents/Moves';
import Stats from '../components/PokemonDetailScreenComponents/Stats';
import Types from '../components/PokemonDetailScreenComponents/Types';
import GlobalStateContext from '../global/GlobalStateContext';
import axios from 'axios'
import { PokemonDetailsScreenContainer } from '../screens/styles'


const PokemonDetailsScreen=() => {

    const { states } = useContext(GlobalStateContext)

    const [pokemonDetails, setPokemonDetails] = useState ('')

    useEffect(() => {
        getPokemonDetails(states.selectedPokemon.url);
    }, []);

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
    
    return(
        <div>
            <Header />
            <PokemonDetailsScreenContainer>    
                <Images 
                    front={pokemonDetails && <img src= {pokemonDetails.sprites.front_default} /> } 
                    back={pokemonDetails && <img src= {pokemonDetails.sprites.back_default} /> }                 
                />
                <Stats 
                    stats= {pokemonDetails.stats}
                />

                <p>
                    <Types 
                        types={pokemonDetails.types} 
                    /> 

                    <Moves 
                        moves={pokemonDetails.moves}
                    />
                    
                </p>

            </PokemonDetailsScreenContainer>

        </div>
    )
}

export default PokemonDetailsScreen
