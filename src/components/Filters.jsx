import React from 'react';

import InputFilter from './InputFilter';
import SelectFilter from './SelectFilter';

const Filters = ({
  searchValue,
  setSearchValue,
  minTime,
  setMinTime,
  maxTime,
  setMaxTime,
  sortValue,
  setSortValue,
}) => {
  const searchOptions = [
    { value: 'CreateDesc', name: 'По дате создания (сначала новые)' },
    { value: 'CreateAsc', name: 'По дате создания (сначала старые)' },
    { value: 'LikeAsc', name: 'По популярности (сначала непопулярные)' },
    { value: 'LikeDesc', name: 'По популярности (сначала популярные)' },
  ];
  return (
    <>
      <InputFilter
        name="Поиск по имени автора"
        type="text"
        inputValue={searchValue}
        setInputValue={setSearchValue}
      />
      <SelectFilter
        name="Сортировать"
        options={searchOptions}
        selectValue={sortValue}
        setSelectValue={setSortValue}
      />
      <InputFilter
        name="Время чтения от"
        type="number"
        inputValue={minTime}
        setInputValue={setMinTime}
      />
      <InputFilter
        name="Время чтения до"
        type="number"
        inputValue={maxTime}
        setInputValue={setMaxTime}
      />
      <select
        class="form-select"
        multiple
        data-mdb-placeholder="Example placeholder"
        onChange={(e) =>
          console.log([...e.target.options].filter((o) => o.selected).map((o) => o.value))
        }>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </select>
    </>
  );
};

export default Filters;
