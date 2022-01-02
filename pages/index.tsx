import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FindButton from '../components/FindButton';
import Map from '../components/Map';

const mapGLDefault = {
  latitude: 37.7577,
  longitude: -122.4376,
};

const Home = ({ mapToken }: { mapToken: string }) => {
  const [isOpen, openPanel] = useState(false);
  const [viewPort, setViewPort] = useState(mapGLDefault);

  return (
    <>
      <FindButton
        isOpen={isOpen}
        openPanel={openPanel}
        setViewPort={setViewPort}
      />
      <Sidebar
        isOpen={isOpen}
        openPanel={openPanel}
      />
      <Map
        mapToken={mapToken}
        viewPort={viewPort}
        setViewPort={setViewPort}
      />
    </>
  );
};

export default Home;

