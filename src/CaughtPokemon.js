import React, { Component } from "react";

class CaughtPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { caughtPokemon: 0 };
  }

  catchPokemon = () => {
    this.setState({
      caughtPokemon: this.state.caughtPokemon + 1
    });
  };

  render() {
    return (
      <div>
        <p>
          Caught {this.state.caughtPokemon} Pokemon on {this.props.date}
        </p>
        <button onClick={this.catchPokemon}>Catch Pokemon</button>
      </div>
    );
  }
}

export default CaughtPokemon;
