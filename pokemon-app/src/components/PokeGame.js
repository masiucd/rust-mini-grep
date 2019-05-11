import React, { Component } from 'react';
import { pokemonData } from '../data';
import Pokemon from './pokemon/Pokemon';

export default class PokeGame extends Component {
  state = {
    pokemons: pokemonData,
  };

  render() {
    const hand1 = [];
    const hand2 = [...this.state.pokemons];
    while (hand1.length < hand2.length) {
      const randomIdx = Math.floor(Math.random() * hand2.length);
      const randomPokemon = hand2.splice(randomIdx, 1)[0];
      hand1.push(randomPokemon);
    }

    const exp1 = hand1.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    const exp2 = hand2.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );

    return (
      <div>
        <Pokemon poke={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokemon poke={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}
