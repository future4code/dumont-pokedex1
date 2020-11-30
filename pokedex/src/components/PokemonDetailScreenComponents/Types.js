import React from "react";
import { TypesContainer } from './styles';

const Types = (props) => {
    
    return (
        <TypesContainer>

            <h3>Tipo</h3>
            
            {props.types && props.types.map ((type, id) => {
                return (
                    <p key= {id}>{type.type.name}</p>
                )
            } )}    

        </TypesContainer>
    )
}

export default Types