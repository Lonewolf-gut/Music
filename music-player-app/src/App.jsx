// import React, { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import TrackCard from './components/TrackCard';
// import MusicPlayer from './components/MusicPlayer';

// const App = () => {
//   const [tracks, setTracks] = useState([]);
//   const [currentTrack, setCurrentTrack] = useState(null);

//   const handleSearch = async (query) => {
//     const data = await searchTracks(query);
//     setTracks(data.data); // Set the tracks
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <SearchBar onSearch={handleSearch} />
//       <div className="mt-4">
//         {tracks.length > 0 ? (
//           tracks.map((track) => (
//             <TrackCard key={track.id} track={track} onPlay={setCurrentTrack} />
//           ))
//         ) : (
//           <p>No tracks found. Try searching again.</p>
//         )}
//       </div>

//       {currentTrack && <MusicPlayer track={currentTrack} />}
//     </div>
//   );
// };

// export default App;
