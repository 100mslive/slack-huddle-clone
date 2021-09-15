import React from 'react';

const AudioPlayer = ({ peers }) => {
  const audioRef = React.useRef(null);
  React.useEffect(() => {
    if (audioRef.current) {
      if (peers.length === 1) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [peers.length]);
  return <audio autoPlay loop ref={audioRef} src='/temp.mp3'></audio>;
};

export default AudioPlayer;
