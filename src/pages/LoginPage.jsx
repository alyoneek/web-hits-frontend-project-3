import React from 'react';

import LoginCard from '../components/LoginCard';

const loginPage = () => {
  console.log('page');
  return (
    <div className="d-flex h-100 justify-content-center align-items-center">
      <LoginCard />
    </div>
  );
};

export default loginPage;
