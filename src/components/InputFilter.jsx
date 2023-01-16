import React from 'react';

const InputFilter = ({ name, type, inputValue, setInputValue }) => {
  return (
    <>
      <label className="form-label">{name}</label>
      <input
        type={type}
        className="form-control"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </>
  );
};

export default InputFilter;
