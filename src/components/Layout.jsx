import React from 'react';
import Socials from './Socials';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-brand-100'>
      <div className='border border-gray-500 rounded p-4 w-80 bg-brand-600'>
        {children}
      </div>
      <Socials />
    </div>
  );
};

export default Layout;
