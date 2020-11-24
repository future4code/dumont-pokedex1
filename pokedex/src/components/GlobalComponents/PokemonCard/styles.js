import styled from 'styled-components';

export const CardContainer = styled.div`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
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

export const Img = styled.img`
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
`