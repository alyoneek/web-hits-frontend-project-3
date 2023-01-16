import React from 'react';

import PostCard from '../components/PostCard';
import Filters from '../components/Filters';

const MainPage = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [minTime, setMinTime] = React.useState(false);
  const [maxTime, setMaxTime] = React.useState(false);
  const [sortValue, setSortValue] = React.useState('CreateDesc');

  console.log(searchValue, minTime, maxTime, sortValue);

  return (
    <>
      <Filters
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        minTime={minTime}
        setMinTime={setMinTime}
        maxTime={maxTime}
        setMaxTime={setMaxTime}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <PostCard />
    </>
  );
};

export default MainPage;
