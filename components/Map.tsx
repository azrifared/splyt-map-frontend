import React from 'react';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';
import { Logo } from './Logo';
import Pin from '../images/pin.png';

export type ViewPort = {
  latitude: number;
  longitude: number;
};

type Props = {
  mapToken: string;
  viewPort: ViewPort;
  setViewPort: (obj: ViewPort) => void;
};

const geolocateControlStyle = {
  right: 10,
  top: 10
};

const Map: React.FC<Props> = ({
  mapToken,
  viewPort,
  setViewPort
}) => {

  return (
    <ReactMapGL
      {...viewPort}
      zoom={17}
      width="100vw"
      height="100vh"
      mapboxApiAccessToken={mapToken}
      onViewportChange={(nextViewport: ViewPort) => setViewPort(nextViewport)}
    >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      />
      <Marker latitude={1.285194} longitude={103.8522982}>
        <Logo src={Pin.src}/>
      </Marker>
      <Marker latitude={51.5049375} longitude={-0.0964509}>
        <Logo src={Pin.src}/>
      </Marker>
    </ReactMapGL>
  );
};

export default Map;

