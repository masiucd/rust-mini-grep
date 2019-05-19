import React from 'react';

const NumItem = ({ val, removeNums }) => {
  const handleReove = () => {
    removeNums(val);
  };
  return (
    <div className="nums">
      {val} <button onClick={handleReove}>X</button>{' '}
    </div>
  );
};

export default NumItem;
