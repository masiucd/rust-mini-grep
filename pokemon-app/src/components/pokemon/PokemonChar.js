import React from 'react';

export default function PokemonChar({ id, name, type, base_experience, img }) {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>Name: {name}</h3>
      <h4>Type: {type}</h4>
      <h5>EXP: {base_experience}</h5>
    </div>
  );
}
