import React from "react";

const Types = (props) => {
    return (
        <div>

            <h3>Tipo</h3>
            
            {props.types.map ((type) => {
                return (
                    <p>{type.type.name}</p>
                )
            } )}    

        </div>
    )
}

export default Types