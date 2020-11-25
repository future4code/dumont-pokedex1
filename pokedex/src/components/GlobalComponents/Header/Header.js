import React from 'react';
import { HeaderContainer, ScreenTitle, HeaderButton } from './styles';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { goToPokedexScreen, goToHomeScreen, goBack } from '../../../routes/coordinator'

const Header = () => {
    const history = useHistory()

    return (
        <HeaderContainer>
            <Switch>
                <Route exact path={"/"}>
                    <HeaderButton onClick={() => goToPokedexScreen(history)}>Ir para Pokédex</HeaderButton>
                    <ScreenTitle>Lista de Pokémons</ScreenTitle>
                </Route>

                <Route exact path={"/pokedex"}>
                    <HeaderButton onClick={()=> goToHomeScreen(history)}>Voltar para lista de Pokémons</HeaderButton>
                    <ScreenTitle>Pokédex</ScreenTitle>
                </Route>
                    
                <Route exact path={"/pokemondetails"}>
                    <HeaderButton onClick={() => goBack(history)}>Voltar</HeaderButton>
                    <ScreenTitle>Nome do Pokémon - Ver na API</ScreenTitle>
                    <HeaderButton onClick={() => goToPokedexScreen(history)}>Ir para Pokédex</HeaderButton>
                </Route>
            </Switch>
        </HeaderContainer>
    )
}

export default Header