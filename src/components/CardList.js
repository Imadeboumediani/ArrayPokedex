import React from 'react';
import Cardofonepokemon from './Cardofonepokemon';
import { allpokemons } from './PokemonData';
import '../styles/CardList.css'; 



const CardList = () => {
  return (

    //création d'un composant pour afficher toutes les cartes de pokemons presents dans nos données 
    <div>
      <div className='poke-container'>
        {allpokemons.map((user, i) =>
          <Cardofonepokemon key={i}
            id={allpokemons[i].id}
            name={allpokemons[i].name}
            type={allpokemons[i].type}
          />
        )}
      </div>
    </div>


  );
};

export default CardList;