import React from 'react';
import styled from 'styled-components'

const ImagesContainer = styled.div`
    display: flex;   
    flex-direction: column;  
    align-items: center;  
    margin-top: 20px;
    img {
        margin: 5px;
        width: 200px;
    }
`
const Images = (props) => {
    
    return (
        <ImagesContainer>

            {props.front}      
            {props.back}
            
        </ImagesContainer>
    )
    
}


export default Images