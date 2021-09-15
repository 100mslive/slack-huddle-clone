import React from 'react';

const DominantSpeaker = ({ dominantSpeaker }) => {
  return (
    <p className='text-white'>
      {dominantSpeaker
        ? dominantSpeaker.name + ' is talking'
        : 'Waiting for Anyone to join/speak'}
    </p>
  );
};

export default DominantSpeaker;
