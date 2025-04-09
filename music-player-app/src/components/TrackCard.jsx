import React from 'react';
import {Link} from 'react-router-dom';

const TrackCard = ({ track, onPlay }) => {
  return (
    <div className="flex items-center p-4 border-b dark:border-gray-600">
      <img 
        src={track.album.cover_small} 
        alt={track.title} 
        className="w-16 h-16 rounded-lg mr-4" 
      />
      <div className="flex-1">
        <p className="font-bold">{track.title}</p>
        <p className="text-gray-600 dark:text-gray-300">{track.artist.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{track.album.title}</p>
      </div>

      <Link
        to="/now-playing"
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => onPlay(track)}
      >
        Play
      </Link>
    </div>
  );
};

export default TrackCard;
