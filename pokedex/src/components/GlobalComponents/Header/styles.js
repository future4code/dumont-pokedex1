import styled from 'styled-components';
import { lightBackground, yellow, shadowYellow } from '../../../constants/colors';

export const HeaderContainer = styled.header`
    background: ${lightBackground};
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #34B4FF;

    @media (min-device-width: 320px) and (max-device-width: 420px) { 
        width: 100vw;
        flex-direction: column-reverse;
        padding-top: 20px;
    }
`

export const ScreenTitle = styled.h1`
    color: white;
    
    @media (min-device-width: 320px) and (max-device-width: 420px) { 
        order: 1;
    }
`

export const PokemonLogo = styled.img`
    width: 25%;
    
    @media (min-device-width: 320px) and (max-device-width: 420px) { 
        width: 80vw;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const HeaderButton = styled.button`
    padding: 15px;
    border-radius: 5px;
    background-color: ${yellow};
    
    &:hover {
        cursor: pointer;
        background-color: ${shadowYellow}
    }
`