import React from 'react';
import { MovesContainer } from './styles';

const Moves = (props) => {

    return (
        <MovesContainer>
            <h3>Principais ataques</h3>
            {props.moves && props.moves.map((move, id) => {
                return id <5 && <p key= {id}> {move.move.name} </p>
            })}
        </MovesContainer>
    )
}

export default Moves