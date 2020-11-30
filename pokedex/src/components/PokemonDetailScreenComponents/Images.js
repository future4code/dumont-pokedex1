import React from 'react';
import { ImagesContainer } from './styles'

const Images = (props) => {
    
    return (
        <ImagesContainer>
            {props.front}      
            {props.back}
        </ImagesContainer>
    )
    
}


export default Images