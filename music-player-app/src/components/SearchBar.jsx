import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit= (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-1 p-2 rounded-l-lg border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        placeholder="Search for songs, artists, or albums"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
