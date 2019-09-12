import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Clock from './Clock';

const pokemonNames = ["Squirtle", "Bulbasaur", "Charmander"];
const date = new Date().toLocaleDateString();
const logWhenClicked = () => {
  console.log("hola mundo");
};

const App = () => {
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon pokemonNames={pokemonNames} />
      <Clock />
      <CaughtPokemon date={date} />
    </div>
  );
};

export default App;
