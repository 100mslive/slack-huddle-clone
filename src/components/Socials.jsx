import React from 'react';

const Socials = () => {
  return (
    <div className='flex space-x-4 mt-4'>
      <a
        className='underline text-blue-500'
        href='https://github.com/100mslive/slack-huddle-clone/'
      >
        Source Code
      </a>
      <a
        className='underline text-blue-500'
        href='https://www.100ms.live/blog/building-slack-huddle-clone'
      >
        Blog
      </a>
    </div>
  );
};

export default Socials;
