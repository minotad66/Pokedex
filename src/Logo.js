import React, { Component } from "react";

class Logo extends Component {
  
  render() {
    return (
      <header>
        <div>
          <h1>Welcome to the {this.props.appName}</h1>
          <img onClick = {this.props.handleClick}
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
            alt=""
          ></img>
        </div>
      </header>
    );
  }
}

export default Logo;
