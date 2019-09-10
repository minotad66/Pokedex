import React from "react";

const BestPokemon = props => {
  return (
    <ul>
      {props.pokemonNames.map(name => {
        return <li>My favourite Pokemon is {name}</li>;
      })}
    </ul>
  );
};

export default BestPokemon;
