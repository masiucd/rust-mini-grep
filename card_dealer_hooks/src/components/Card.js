import React, { useEffect, useState } from 'react';
import './card.css';
function Card({ image, name }) {
  const [cardStyle, setCardStyle] = useState('');

  useEffect(() => {
    const angel = Math.random() * 90 - 45;
    const yPos = Math.random() * 40 - 20;
    const xPos = Math.random() * 40 - 20;

    const cardStyle = `translate(${yPos}px ,${xPos}px) rotate(${angel}deg)`;
    setCardStyle(cardStyle);
  }, []);

  return (
    <div className="card-body">
      <img
        style={{ transform: cardStyle }}
        className="card"
        src={image}
        alt={name}
      />
    </div>
  );
}

export default Card;
