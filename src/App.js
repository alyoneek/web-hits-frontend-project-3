import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <div className="container flex-grow-1">
        <RegisterPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
