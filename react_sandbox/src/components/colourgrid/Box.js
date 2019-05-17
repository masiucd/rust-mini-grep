import React, { useState } from 'react';
import { colours, choice } from '../../helper';

export default function Box() {
  const [colour, setColour] = useState(choice(colours));

  const pickColour = () => {
    let newColour;
    do {
      newColour = choice(colours);
    } while (newColour === colour);
    setColour(choice(colours));
  };

  const handleClick = () => {
    pickColour();
  };
  return (
    <>
      <div
        className="box"
        style={{ backgroundColor: colour }}
        onClick={handleClick}
      />
    </>
  );
}
