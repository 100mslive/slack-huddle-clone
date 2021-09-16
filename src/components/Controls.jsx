import React from 'react';
import MicOnIcon from '../icons/MicOnIcon';
import MicOffIcon from '../icons/MicOffIcon';
import DisplayIcon from '../icons/DisplayIcon';
import UserPlusIcon from '../icons/UserPlusIcon';
import HeadphoneIcon from '../icons/HeadphoneIcon';
import {
  useHMSStore,
  useHMSActions,
  selectIsLocalAudioEnabled,
} from '@100mslive/hms-video-react';

const Controls = () => {
  const actions = useHMSActions();
  const isAudioOn = useHMSStore(selectIsLocalAudioEnabled);
  return (
    <div className='flex justify-between items-center mt-4'>
      <div className='flex items-center space-x-4 '>
        <button
          onClick={() => {
            actions.setLocalAudioEnabled(!isAudioOn);
          }}
        >
          {isAudioOn ? <MicOnIcon /> : <MicOffIcon />}
        </button>
        <button className='cursor-not-allowed opacity-60' disabled>
          <DisplayIcon />
        </button>
        <button className='cursor-not-allowed opacity-60' disabled>
          <UserPlusIcon />
        </button>
      </div>
      <div
        className={`w-12 h-6 rounded-full relative border border-gray-600 bg-brand-500`}
      >
        <button
          onClick={() => actions.leave()}
          className={`absolute h-7 w-7 rounded-full flex justify-center items-center bg-white left-6 -top-0.5`}
        >
          <HeadphoneIcon />
        </button>
      </div>
    </div>
  );
};

export default Controls;
