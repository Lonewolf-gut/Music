import React from 'react';

const TrackCard = ({ track, onPlay }) => {
  return (
    <div className="flex items-center p-4 border-b">
      <img src={track.album.cover_small} alt={track.title} className="w-16 h-16 rounded-lg mr-4" />
      <div className="flex-1">
        <p className="font-bold">{track.title}</p>
        <p className="text-gray-600">{track.artist.name}</p>
        <p className="text-sm text-gray-500">{track.album.title}</p>
      </div>
      <button onClick={() => onPlay(track)} className="bg-blue-500 text-white p-2 rounded">
        Play
      </button>
    </div>
  );
};

export default TrackCard;
