import React, { useContext } from 'react';
import { HeaderContainer, ScreenTitle, PokemonLogo, HeaderButton } from './styles';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { goToPokedexScreen, goToHomeScreen, goBack } from '../../../routes/coordinator'
import GlobalStateContext from '../../../global/GlobalStateContext';
import pokemonLogo from '../../../assets/pokemon-logo.png'

const Header = () => {
    const history = useHistory()
    const { states } = useContext(GlobalStateContext)

    return (
        <HeaderContainer>
            <Switch>
                <Route exact path={"/"}>
                    <HeaderButton onClick={() => goToPokedexScreen(history)}>Ir para Pokédex</HeaderButton>
                    <PokemonLogo src={pokemonLogo} alt={"Pokémon Logo"} />
                </Route>

                <Route exact path={"/pokedex"}>
                    <HeaderButton onClick={()=> goToHomeScreen(history)}>Voltar para lista de Pokémons</HeaderButton>
                    <ScreenTitle>Pokédex</ScreenTitle>
                </Route>
                    
                <Route exact path={"/pokemondetails"}>
                    <HeaderButton onClick={() => goBack(history)}>Voltar</HeaderButton>
                    <ScreenTitle>{states.selectedPokemon.name}</ScreenTitle>
                    <HeaderButton onClick={() => goToPokedexScreen(history)}>Ir para Pokédex</HeaderButton>
                </Route>
            </Switch>
        </HeaderContainer>
    )
}

export default Header