import React from 'react';

const SelectFilter = ({ name, options, selectValue, setSelectValue }) => {
  return (
    <>
      <label className="form-label">{name}</label>
      <select class="form-select" onChange={(event) => setSelectValue(event.target.value)}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectFilter;
