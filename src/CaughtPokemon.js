import React, { Component } from "react";

class CaughtPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemonNameInput: "",
      caughtPokemon: []
    };
    this.satate1 = { menssage: console.log('constructor') };
  }
/* 
  componentDidMount = () => {
    console.log('componentDidMount');
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  }
  
  componentWillUnmoun = () => {
    console.log('componentWillUnmoun ');
  } */

  handleInputChange = event =>{
    console.log(event.target.value);
    this.setState({
      pokemonNameInput: event.target.value
    })
    
  }

  catchPokemon = () => {
    let newCaughtPokemon = this.state.CaughtPokemon.push(this.state.pokemonNameInput);
    this.setState({
      caughtPokemon: newCaughtPokemon
    });
  };

  render() {
    return (
      <div>
        <p>
          Caught {this.state.caughtPokemon.length} Pokemon on {this.props.date}
        </p>
        <input type = "text" value = {this.state.pokemonNameInput}  onChange= {this.handleInputChange}/>
        <button onClick={this.catchPokemon}>Catch Pokemon</button>
      </div>
    );
  }
}

export default CaughtPokemon;
