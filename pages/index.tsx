import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FindButton from '../components/FindButton';
import Map from '../components/Map';

const Home = ({ mapToken }: { mapToken: string }) => {
  const [isOpen, openPanel] = useState(false);

  return (
    <>
      <FindButton isOpen={isOpen} openPanel={openPanel} />
      <Sidebar isOpen={isOpen} openPanel={openPanel} />
      <Map mapToken={mapToken} />
    </>
  );
};

export default Home;

