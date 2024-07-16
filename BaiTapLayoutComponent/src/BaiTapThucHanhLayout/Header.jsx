import React from 'react';
const Header = () => {
  return (
    <header className="bg-dark py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h3 className="text-white">Start Bootstrap</h3>
        <div>
          <a href="#" className="text-white mx-2 text-decoration-none">Home</a>
          <a href="#" className="text-white mx-2 text-decoration-none">About</a>
          <a href="#" className="text-white mx-2 text-decoration-none">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
