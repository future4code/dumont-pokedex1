import React from 'react';
import styled from 'styled-components'

const ImagesContainer = styled.div`
    display: flex;   
    flex-direction: column;  
    align-items: center;  
    margin-top: 20px;
    img {
        margin: 5px;
        max-width: 100px;
    }
`



const Images = () => {
    return (
        <ImagesContainer>
            <img src= 'https://picsum.photos/100' />
            <img src= 'https://picsum.photos/101' />
        </ImagesContainer>
    )
}

export default Images