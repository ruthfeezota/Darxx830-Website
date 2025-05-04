import React from 'react';

function Navbar() {
  return (
    <section>
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-4xl px-4 py-4">
        <div className="flex items-center justify-center space-x-[200px] font-exo mt-4">
          {/* Left Links */}
          <a href="/" className="text-white hover:text-gray-400 uppercase">About</a>
          <a href="/" className="text-white hover:text-gray-400 uppercase">New Music</a>

          {/* Logo */}
          <a href="/" className="text-white hover:text-gray-400 uppercase text-4xl font-bebas leading-tight">Darxx830</a>

          {/* Right Links */}
          <a href="/" className="text-white hover:text-gray-400 uppercase">Blog</a>
          <a href="/" className="text-white hover:text-gray-400 uppercase">Contact</a>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
