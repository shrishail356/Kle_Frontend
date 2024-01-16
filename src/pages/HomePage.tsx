// src/App.tsx

import React from 'react';
import Header from './Header.tsx';
import Login from './LoginForm.tsx';

const HomePage: React.FC = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'url("img/kle_bg.jpg")', // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensure the app takes the full height of the viewport
      }}
    >
      <Header />
      <Login />
    </div>
  );
};

export default HomePage;
