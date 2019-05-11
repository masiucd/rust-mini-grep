import React, { Component } from 'react';
import axios from 'axios';
import { pokemonData } from '../../data';
import PokemonCard from './PokemonCard';

export default class Pokemon extends Component {
  state = {
    pokemons: pokemonData,
  };

  componentDidMount() {
    const { pokemons } = this.state;
  }

  padToThree = num => (num <= 999 ? `00${num}`.slice(-3) : num);

  renderPokemons = () => {
    const { pokemons } = this.state;
    const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
    // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    return pokemons.map(card => (
      <PokemonCard
        id={card.id}
        key={card.id}
        img={`${POKE_API}${this.padToThree(card.id)}.png`}
        name={card.name}
        type={card.type}
        base_experience={card.base_experience}
      />
    ));
  };

  render() {
    let title;
    if (this.props.isWinner) {
      title = <p>Wining hand</p>;
    } else {
      title = <p>Losing hand</p>;
    }

    return (
      <div className="pokemon-board">
        <h1>Pokemons Board</h1>
        <h4>Totlal: experince{this.props.exp}</h4>
        {title}
        <div className="container"> {this.renderPokemons()}</div>
      </div>
    );
  }
}
