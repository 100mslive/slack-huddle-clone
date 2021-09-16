import React, { useState } from 'react';
import Avatar from 'boring-avatars';
import Socials from './Socials';

const Join = () => {
  const [username, setUsername] = useState('');
  const joinRoom = () => {};
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-brand-100'>
      <Avatar size={100} variant='pixel' name={username} />
      <input
        type='text'
        placeholder='Enter username'
        onChange={(e) => setUsername(e.target.value)}
        className='px-6 mt-5 text-center py-3 w-80 bg-brand-100 rounded  border  border-gray-600 outline-none placeholder-gray-400 focus:ring-4 ring-offset-0 focus:border-blue-600 ring-brand-200 text-lg transition'
        maxLength='20'
      />
      <button
        type='button'
        onClick={joinRoom}
        className='w-80 rounded bg-brand-400 hover:opacity-80 px-6 mt-5 py-3 text-lg focus:ring-4 ring-offset-0 focus:border-blue-600 ring-brand-200 outline-none'
      >
        Join Huddle
      </button>
      <Socials />
    </div>
  );
};

export default Join;
