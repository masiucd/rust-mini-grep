import React from 'react';

const AnnoyingForm = () => {
  const handleKeyUp = e => {
    if (e.keyCode === 56) {
      alert('***************** I LOVE THE * CHARACTER *****************');
    } else {
      alert('BOO');
    }
  };

  return (
    <div>
      <h3>Type someting a ****, keycode 56</h3>
      <textarea onKeyUp={handleKeyUp} />
    </div>
  );
};

export default AnnoyingForm;
