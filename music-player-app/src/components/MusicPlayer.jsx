import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkip = () => {
    // skip to the next track (you may want to fetch the next track here)
    alert('Skipping to the next track');
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = event.target.value;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const skipTrack = () => {
  // skipping next track functionality)
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg">
      {track ? (
        <>
          <img src={track.album.cover_medium} alt={track.title} className="w-32 h-32 mb-4" />
          <p className="font-bold">{track.title}</p>
          <p className='text-sm'>{track.artist.name}</p>
          <p className='text-xs text-gray-400'>{track.artist.title}</p>

          <audio
            ref={audioRef}
            src={track.preview}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
            preload="auto"
          ></audio>
  
          <div className="flex items-center mt-4">
            <button 
              onClick={togglePlay} 
              className="bg-blue-500 text-white p-2 rounded-full"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>

            <button 
              onClick={skipTrack} 
              className="bg-gray-500 p-2 ml-4 rounded-full"
            >

              Skip
            </button>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-32"
            />
            <span className="text-sm ml-2">{Math.round(volume * 100)}%</span>
          </div>
        </>
      ) : (
        <p>No track is playing</p>
      )}
    </div>
  );
};

export default MusicPlayer;
