// import React, { useState, useRef } from 'react';

// const MusicPlayer = ({ track }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const skipTrack = () => {
//     // Logic for skipping (e.g., next track functionality)
//   };

//   return (
//     <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
//       <img src={track.album.cover_medium} alt={track.title} className="w-16 h-16 rounded-lg" />
//       <div className="flex-1 ml-4">
//         <p className="font-bold">{track.title}</p>
//         <p>{track.artist.name}</p>
//       </div>
//       <div className="flex items-center">
//         <button onClick={togglePlay} className="bg-blue-500 p-2 rounded">
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//         <button onClick={skipTrack} className="bg-gray-500 p-2 ml-2 rounded">
//           Skip
//         </button>
//       </div>
//       <audio ref={audioRef} src={track.preview} />
//     </div>
//   );
// };

// export default MusicPlayer;
