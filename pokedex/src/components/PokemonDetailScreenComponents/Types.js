import React from "react";

const Types = (props) => {
    
    return (
        <div>

            <h3>Tipo</h3>
            
            {props.types && props.types.map ((type, id) => {
                return (
                    <p key= {id}>{type.type.name}</p>
                )
            } )}    

        </div>
    )
}

export default Types