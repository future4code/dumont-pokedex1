import React from 'react';
import { HeaderContainer, ScreenTitle, HeaderButton } from './styles';
import { Route, Switch } from 'react-router-dom';

// const goToPokedex = () => {
//     return (
//         <Switch>
//             <Route exact path={"/pokedex"} />
//         </Switch>
//     )
// }

const Header = () => {
    return (
        <HeaderContainer>
            <Switch>
                <Route exact path={"/"}>
                    <HeaderButton>Ir para Pokédex</HeaderButton>
                    <ScreenTitle>Lista de Pokémons</ScreenTitle>
                </Route>

                <Route exact path={"/pokedex"}>
                    <HeaderButton>Voltar para lista de Pokémons</HeaderButton>
                    <ScreenTitle>Pokédex</ScreenTitle>
                </Route>
                    
                <Route exact path={"/pokemondetails"}>
                    <HeaderButton>Voltar</HeaderButton>
                    <ScreenTitle>Lista de Pokémons</ScreenTitle>
                    <HeaderButton>Ir para Pokédex</HeaderButton>
                </Route>
            </Switch>
        </HeaderContainer>
    )
}

export default Header