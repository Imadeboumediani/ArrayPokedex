import React from 'react';
import Cardofonepokemon from './Cardofonepokemon';
import { allpokemons } from './PokemonData';
import './CardList.css';



const CardList = () => {
  return (

    //on donne des propriétés qu'on définit nous même et qu'on affiche dans ce composant
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