import React from 'react';

const WiseSquare = () => {
  const dispendWisdom = () => {
    const msg = [
      'View fine me gone this name an rank. Compact greater and demands mrs the parlors. Park be fine easy ',
      'Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face',
      'Celebrated am announcing delightful remarkably we in literature it solicitude. Design use say piqued any ',
      'Excited it hastily an pasture it observe. Snug hand how dare here too. ',
    ];
    const rIndx = Math.floor(Math.random() * msg.length);
    console.log(msg[rIndx]);
  };

  return (
    <>
      <div className="WiseSquare " onMouseEnter={dispendWisdom}>
        🤪
      </div>
    </>
  );
};

export default WiseSquare;
