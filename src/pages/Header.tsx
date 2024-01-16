// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="p-4 flex justify-between items-center"
      style={{
        position: 'relative',
        // Ensure the header appears above the background
      }}
    >
      <div>
        <img src="img/kle_logo.png" alt="Logo" className="h-11" />
      </div>
      <nav className="flex">{/* Add more navigation links as needed */}</nav>
    </header>
  );
};

export default Header;
