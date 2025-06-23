
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-950 text-white py-6 px-4 md:px-8 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">Athom8</h1>
        <p className="text-sm uppercase tracking-wider mt-2 md:mt-0">
          Powered by <span className="font-semibold text-sky-400">Automation</span> | Driven by <span className="font-semibold text-sky-400">Imagination</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
