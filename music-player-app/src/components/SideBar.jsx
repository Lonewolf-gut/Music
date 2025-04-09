import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ toggleTheme, theme }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 p-4 bg-gray-200 dark:bg-gray-700`}>
      <h2 className="text-xl font-bold mb-4">Music Player</h2>
      
      <div className="space-y-4">
        <Link to="/" className="block text-lg hover:text-blue-500">
          Home
        </Link>
        <Link to="/now-playing" className="block text-lg hover:text-blue-500">
          Now Playing
        </Link>
      </div>

      <div className="mt-8">
        <button
          onClick={toggleTheme}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
        >
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
