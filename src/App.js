import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const pokemonNames = ["Squirtle", "Bulbasaur", "Charmander"];
const date = new Date().toLocaleDateString();

const App = () => {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon pokemonNames={pokemonNames} />
      <CaughtPokemon date={date} />
    </div>
  );
};

export default App;
