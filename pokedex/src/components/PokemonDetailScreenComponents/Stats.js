import React from 'react';


const Stats = (props) => {
    return (
        <div>
            <h3>Poderes</h3>
                               
            <p> <strong>{props.stats && props.stats[0].stat.name}:</strong> {props.stats && props.stats[0].base_stat}</p>
            <p> <strong>{props.stats && props.stats[1].stat.name}:</strong> {props.stats && props.stats[1].base_stat}</p>
            <p> <strong>{props.stats && props.stats[2].stat.name}:</strong> {props.stats && props.stats[2].base_stat}</p>
            <p> <strong>{props.stats && props.stats[3].stat.name}:</strong> {props.stats && props.stats[3].base_stat}</p>
            <p> <strong>{props.stats && props.stats[4].stat.name}:</strong> {props.stats && props.stats[4].base_stat}</p>
                        

        </div>
    )
}

export default Stats