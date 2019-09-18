import React, { Component } from "react";

class CaughtPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNameInput: "",
      caughtPokemon: []
    };
  }

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({
      pokemonNameInput: event.target.value
    });
  };

  catchPokemon = () => {
    console.log(this.state.caughtPokemon);
    if (this.state.pokemonNameInput !== "") {
      this.state.caughtPokemon.push(this.state.pokemonNameInput);
      this.setState({
        caughtPokemon: this.state.caughtPokemon,
        pokemonNameInput: ""
      });
    }
  };

  render() {
    return (
      <div>
        <p>
          Caught {this.state.caughtPokemon.length} Pokemon on {this.props.date}
        </p>
        <div className="imput"> 
          <input
            type="text"
            value={this.state.pokemonNameInput}
            onChange={this.handleInputChange}
          />
          <button className="button" onClick={this.catchPokemon}>
            Catch Pokemon
          </button>
        </div>
        <ul>
          {this.state.caughtPokemon.map(name => (
            <li> {name} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CaughtPokemon;
