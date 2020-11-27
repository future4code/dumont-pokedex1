import styled from 'styled-components'

export const PokemonDetailsScreenContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    `

export const ImagesContainer = styled.div`
    display: flex;   
    flex-direction: column;  
    align-items: center;  
    margin-top: 10px;
    img {
        margin: 5px;
        width: 150px;
    }
`