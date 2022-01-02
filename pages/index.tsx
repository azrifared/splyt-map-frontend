import { useState } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';

type ViewPort = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const geolocateControlStyle = {
  right: 10,
  top: 10
};

const mapGLDefault = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 17
}

const Home = ({ mapToken }: { mapToken: string }) => {
  const [viewport, setViewport] = useState<ViewPort>(mapGLDefault);

  return (
    <>
      <div>Raskdakd[dak</div>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={mapToken}
        onViewportChange={(nextViewport: ViewPort) => setViewport(nextViewport)}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
      </ReactMapGL>
       
    </>
  );
  
};

export default Home;

