import React, { FunctionComponent, useState } from 'react';

const Counter: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
  const [clicks, setClicks] = useState(initial);
  return (
    <>
      <h4>Clicks {clicks} </h4>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  );
};

export default Counter;
