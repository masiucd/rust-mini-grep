import React from 'react';
import PropTypes from 'prop-types';

export default function TextInputGroup({
  label,
  name,
  value,
  placeHolder,
  type,
  onChange,
  error,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        name={name}
        className={`${error ? 'diplay-error shake' : null}`}
        value={value}
        onChange={onChange}
        error={error}
      />
    </>
  );
}

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInputGroup.defaultProps = {
  type: '',
};
