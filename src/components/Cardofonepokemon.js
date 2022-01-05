import React from 'react';
import '../styles/Cardofonepokemon.css';

//création du composant affichant une carte d'un seul pokémon 

const Cardofonepokemon = ({id,name,type}) => {
    return (
        <div className={`cardofpokemon ${type}`}>
            <div>
            <p>#{id}</p>
            <img alt='' src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}/>
            <h1>{name}</h1>
            <p>{type}</p>
            <div className={type}></div>
            </div>
         </div>
    );
};


export default Cardofonepokemon;
