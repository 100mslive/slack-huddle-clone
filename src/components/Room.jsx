import React from 'react';
import Controls from './Controls';
import Layout from './Layout';

const Room = () => {
  return (
    <Layout>
      <div className='flex'>
        <div className='ml-4'>Welcome to the Room</div>
      </div>
      <Controls />
    </Layout>
  );
};

export default Room;
