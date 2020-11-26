import styled from 'styled-components';
import { darkBlue, lightBackground, lightBlue } from '../../../constants/colors';

export const HeaderContainer = styled.header`
    background: ${lightBackground};
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #34B4FF;
`

export const ScreenTitle = styled.h1`
    color: white;
`

export const PokemonLogo = styled.img`
    width: 25%;
`

export const HeaderButton = styled.button`
    margin: 10px;
    border-radius: 5px;
    font-size: 16px;
    padding: 6px;
`