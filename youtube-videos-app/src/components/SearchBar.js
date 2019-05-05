import React, { useState } from 'react';
import styled from 'styled-components';

export default function SearchBar({ onTermSubmit }) {
  const [term, setTerm] = useState('');

  const onInputChange = e => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onTermSubmit(term);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="video"> Search Video </label>
        <input type="text" value={term} onChange={onInputChange} />
      </div>
    </Form>
  );
}

const Form = styled.form`
  width: 80%;
  padding: 2rem 1.2rem;
  border: #222212;
  box-shadow: 3px 4px 6px 4px #1212;
  margin: 0 auto;
  margin-top: 2.6rem;
  label {
    font-size: 1.5rem;
  }
  input {
    padding: 1rem;
    border: none;
    width: 70%;
    box-shadow: 3px 4px 4px 4px #1313;
    margin: 0 auto;
    display: block;
    border-radius: 22px;
    font-size: 1.6rem;
  }
`;
