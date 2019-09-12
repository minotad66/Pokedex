import React, { Component } from "react";

class BestPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNames: [],
      isLoading: true
    };
  }

  componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokedex/1/")
      .then(res => res.json())
      .then(data =>
        this.setState({
          isLoading: false,
          pokemonNames: [
            `${data.pokemon_entries[0].pokemon_species.name}  ${data.pokemon_entries[0].pokemon_species.url}`,
            `${data.pokemon_entries[3].pokemon_species.name}  ${data.pokemon_entries[3].pokemon_species.url}`,
            `${data.pokemon_entries[6].pokemon_species.name}  ${data.pokemon_entries[6].pokemon_species.url}`
          ]
        })
      )
      .catch(err => {
        this.setState({
          isLoading: false,
          err: err
        });
      });
  };

  render() {
    if (this.state.isLoading) {
      return <span>Loading...</span>;
    } else if (this.state.error) {
      return <span>Something went wrong</span>;
    } else {
      return (
        <ul>
          {this.state.pokemonNames.map(name => {
            return <li>My favourite Pokemon is {name}</li>;
          })}
        </ul>
      );
    }
  }
}

export default BestPokemon;
