import styled from 'styled-components';
import { darkBlue, lightBlue, yellow, shadowYellow } from '../../../constants/colors'

export const CardContainer = styled.div`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    background: radial-gradient(${darkBlue}, ${lightBlue});
    width: 80%;
    display: flex;
    padding: 20px;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    transition: width 0.5s;

    &:hover {
        width: 90%;
    }
`

export const Title = styled.h3`
    font-size: 1.8rem;
    color: #FFF;
`

export const Img = styled.img`
    background-color: #FFF;
    width: 100%;
    border-radius: 5px;
`

export const FlexContainer = styled.div`
    width: 100%;
    display: flex;
`

export const Button = styled.button`
    width: 50%;
    padding: 5px;
    border-radius: 5px;
    background-color: ${yellow};
    
    &:hover {
        cursor: pointer;
        background-color: ${shadowYellow}
    }
`