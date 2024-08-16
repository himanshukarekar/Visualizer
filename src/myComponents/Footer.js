import React from 'react';

const Footer = () => {
    let footerstyle = { position: "relative", top: "100vh", width: "100%" }
    return (
      <footer className="bg-black text-light py-1" style={footerstyle}>
        <p className='text-center'>
          TodosList.com &copy; 
        </p>
      </footer>
    );
  };

export default Footer;

