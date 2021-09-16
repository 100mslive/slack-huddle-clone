import Join from './components/Join';
import Room from './components/Room';
import './App.css';
import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from '@100mslive/hms-video-react';

const SpacesApp = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return <>{isConnected ? <Room /> : <Join />}</>;
};

function App() {
  return (
    <HMSRoomProvider>
      <div className='bg-brand-100'>
        <SpacesApp />
      </div>
    </HMSRoomProvider>
  );
}

export default App;
