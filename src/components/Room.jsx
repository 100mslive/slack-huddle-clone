import {
  selectPeers,
  useHMSStore,
  selectDominantSpeaker,
  selectLocalPeer,
} from '@100mslive/hms-video-react';
import React from 'react';
import Controls from './Controls';
import UserAvatar from './UserAvatar';
import Participants from './Participants';
import LonelyPeer from './LonelyPeer';
import DominantSpeaker from './DominantSpeaker';
import Layout from './Layout';
import AudioPlayer from './AudioPlayer';

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer);
  const peers = useHMSStore(selectPeers);
  const dominantSpeaker = useHMSStore(selectDominantSpeaker);
  return (
    <Layout>
      <div className='flex'>
        <AudioPlayer peers={peers} />
        <UserAvatar dominantSpeaker={dominantSpeaker} localPeer={localPeer} />
        <div className='ml-4'>
          <DominantSpeaker dominantSpeaker={dominantSpeaker} />
          {peers.length > 1 ? <Participants peers={peers} /> : <LonelyPeer />}
        </div>
      </div>
      <Controls />
    </Layout>
  );
};

export default Room;
