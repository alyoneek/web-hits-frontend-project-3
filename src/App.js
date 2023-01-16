import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <div className="container flex-grow-1 py-5">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
