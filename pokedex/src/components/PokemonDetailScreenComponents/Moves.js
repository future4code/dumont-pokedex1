import React from 'react';




const Moves = (props) => {

    return (


        <div>

            <h3>Principais ataques</h3>

            {props.moves && props.moves.map((move, id) => {
                return id <5 && <p key= {id}> {move.move.name} </p>
            })}
            
        </div>
    )
}

export default Moves