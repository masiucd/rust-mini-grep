import React from 'react';
import PokemonChar from './PokemonChar';

export default function PokemonCard({ id, img, name, type, base_experience }) {
  return (
    <div className="card">
      <PokemonChar
        id={id}
        img={img}
        name={name}
        type={type}
        base_experience={base_experience}
      />
    </div>
  );
}
