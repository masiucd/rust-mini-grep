import React from 'react';

const CopyDemo = () => {
  const dontSteel = () => {
    alert('Please dont copy the text!!!');
  };
  return (
    <div className="copy-demo">
      <h3>Try to copy the text</h3>
      <section onCopy={dontSteel}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate
        cum perspiciatis quos placeat sint mollitia fuga eaque necessitatibus
        optio. Excepturi distinctio sit amet perferendis tenetur neque deserunt
        officiis necessitatibus ea reprehenderit, iste placeat inventore dicta
        fugiat voluptas dolor, sint illum sed ratione at aut numquam corrupti
        quia? Ducimus illo placeat velit voluptatibus expedita dicta consequatur
        maxime suscipit, sapiente, facere quibusdam esse magni? Iure beatae
        necessitatibus repellat sit, perspiciatis similique?
      </section>
    </div>
  );
};

export default CopyDemo;
