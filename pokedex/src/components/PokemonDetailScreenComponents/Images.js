import React from 'react';
import { ImagesContainer } from '../../screens/styles'

const Images = (props) => {
    
    return (
        <ImagesContainer>

            {props.front}      
            {props.back}
            
        </ImagesContainer>
    )
    
}


export default Images