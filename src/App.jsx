import Join from './components/Join';
import Room from './components/Room';
import './App.css';

const SpacesApp = () => {
  const isConnected = false;
  return <>{isConnected ? <Room /> : <Join />}</>;
};

function App() {
  return (
    <div className='bg-brand-100'>
      <SpacesApp />
    </div>
  );
}

export default App;
