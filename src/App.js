import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="d-flex vh-100 flex-column">
      <Navbar />
      <div className="container flex-grow-1 py-5">
        <ProfilePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
