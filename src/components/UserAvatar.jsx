import React from 'react';
import Avatar from 'boring-avatars';

const UserAvatar = ({ dominantSpeaker, localPeer }) => {
  return (
    <Avatar
      name={
        dominantSpeaker && dominantSpeaker.name
          ? dominantSpeaker.name
          : localPeer.name
      }
      variant='pixel'
      size={30}
    />
  );
};

export default UserAvatar;
