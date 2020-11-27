import React from 'react';




const Moves = (props) => {
    return (
        <div>

            <h3>Principais ataques</h3>

            <p> {props.moves && props.moves[0].move.name} </p>
            <p> {props.moves && props.moves[1].move.name} </p>
            <p> {props.moves && props.moves[2].move.name} </p>
            <p> {props.moves && props.moves[3].move.name} </p>
            <p> {props.moves && props.moves[4].move.name} </p>

        </div>
    )
}

export default Moves