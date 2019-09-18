import React, { Component } from "react";
import Logo from "./Logo";
import "./App.css";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Clock from "./Clock";

const pokemonNames = ["Squirtle", "Bulbasaur", "Charmander"];
const date = new Date().toLocaleDateString();
const logWhenClicked = () => {
  console.log("hola mundo");
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <Logo appName="Pokedex" handleClick={logWhenClicked} />
        <BestPokemon pokemonNames={pokemonNames} />
        <Clock />
        <CaughtPokemon date={date} />
      </div>
    );
  }
}

export default App;
