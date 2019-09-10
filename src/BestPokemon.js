import React, { Component } from "react";

class BestPokemon extends Component {
  render() {
    return (
      <ul>
        {this.props.pokemonNames.map(name => {
          return <li>My favourite Pokemon is {name}</li>;
        })}
      </ul>
    );
  }
}

export default BestPokemon;
