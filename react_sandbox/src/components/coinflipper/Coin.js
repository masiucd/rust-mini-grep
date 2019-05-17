import React from 'react';

const Coin = ({ side }) => (
  <>
    <img src={side.imgSrc} alt={side.side} />
  </>
);

export default Coin;
