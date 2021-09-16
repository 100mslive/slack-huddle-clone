import React from 'react';

const AudioPlayer = ({ length }) => {
  const audioRef = React.useRef(null);
  React.useEffect(() => {
    if (audioRef.current) {
      if (length === 1) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [length]);
  return <audio autoPlay loop ref={audioRef} src='/temp.mp3'></audio>;
};

export default AudioPlayer;
