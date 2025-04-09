import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import TrackCard from './components/TrackCard';
import MusicPlayer from './components/MusicPlayer';
import './App.css'; //styles loaded for dark and light modes

const App = () => {
   // State to manage the theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Default to light or saved theme
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

    // Toggle theme function
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme); // Store the user's theme preference in local storage
    };
  
    // Apply the theme to the body (or main wrapper) when theme changes
    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme]);

  const handleSearch = async (query) => {
    const data = await searchTracks(query);
    setTracks(data.data); // Set the tracks
  };

  return (
    <div className="container mx-auto p-4">
        {/* Dark mode toggle button */}
        <button
          onClick={toggleTheme}
          className="mb-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>

        <SearchBar onSearch={handleSearch} />
        <div className="mt-4">
          {tracks.length > 0 ? (
            tracks.map((track) => (
              <TrackCard key={track.id} track={track} onPlay={setCurrentTrack} />
            ))
          ) : (
            <p>No tracks found. Try searching again.</p>
          )}
        </div>

      {currentTrack && <MusicPlayer track={currentTrack} />}
    </div>
  );
};

export default App;
