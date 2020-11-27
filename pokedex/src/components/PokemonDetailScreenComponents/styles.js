import styled from 'styled-components';
import { lightBackground } from '../../constants/colors'

export const PokemonDetailsScreenContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    padding: 40px;
    background: linear-gradient(45deg, #FFF, ${lightBackground});

    @media (min-device-width: 320px) and (max-device-width: 420px) { 
        flex-direction: column;
        align-items: center;
    }
`

export const ImagesContainer = styled.div`
    display: flex;   
    flex-direction: column;  
    align-items: center;  
    img {
        width: 15vw;
        align-self: center;
    }
    gap: 20px;
    width: 25vw;

    @media (min-device-width: 320px) and (max-device-width: 420px) { 
        flex-direction: row;
        justify-content: center;
        img {
            width: 30vw;
        }
    }
`
export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    align-items: center;
    width: 25vw;

    @media (min-device-width: 320px) and (max-device-width: 420px) { 
        width: 70vw;
        padding: 0;
        align-self: center;
    }
`

export const TypesContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    align-items: center;
`

export const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    align-items: center;
`

export const TypesMovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 20vw;

    @media (min-device-width: 320px) and (max-device-width: 420px) { 
        width: 70vw;
    }
`