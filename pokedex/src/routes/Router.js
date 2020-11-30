import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import PokedexScreen from '../screens/PokedexScreen';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomeScreen />
                </Route>

                <Route exact path={"/pokedex"}>
                    <PokedexScreen />
                </Route>

                <Route exact path={"/pokemondetails"}>
                    <PokemonDetailsScreen />
                </Route>

                <Route>
                    <div>ERRO 404 - Página não encontrada.</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router