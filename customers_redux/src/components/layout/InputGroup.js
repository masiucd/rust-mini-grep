/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { shake } from '../../styles/animation';

export default function InputGroup({
  name,
  value,
  placeholder,
  handleChange,
  error,
  type,
  label,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={`${error ? 'display-error shake' : null}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </>
  );
}
