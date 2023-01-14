import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="d-flex vh-100 flex-column">
      <Navbar />
      <div className="container flex-grow-1">
        <LoginPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
