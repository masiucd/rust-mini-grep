/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';

interface Person {
  first: string;
  last: string;
}

interface Props {
  text?: string;
  bool?: boolean;
  num?: number;
  fn?: (name: string) => string;
  person?: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CountNode {
  counter: number;
}

const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = React.useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <input ref={inputRef} onChange={handleChange} />
      {count > 0 ? count : null}
      <button onClick={() => setCount(count - 1)}>➖</button>
    </div>
  );
};

export default TextField;
