import React, { useCallback } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import { useRecoilState } from 'recoil';
import { SPLYT_OFFICE_LOCATION } from '../utils/constants';
import MarkerPin from './MarkerPin';
import {
  userLocationState,
  viewPortState
} from '../recoil';

export type ViewPort = {
  latitude: number;
  longitude: number;
};

type Props = {
  mapToken: string;
};

const geolocateControlStyle = {
  right: 10,
  top: 10
};

const Map: React.FC<Props> = ({ mapToken }) => {
  const { singapore, london } = SPLYT_OFFICE_LOCATION;
  const [userLocation, setUserLocation] = useRecoilState(userLocationState);
  const [viewPort, setViewPort] = useRecoilState(viewPortState);
  const userLocationHandler = useCallback(({
    latitude, longitude
  }) => {
    setViewPort({ latitude, longitude });
    setUserLocation({ latitude, longitude });
  }, [userLocation]);

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
        onViewportChange={userLocationHandler}
        auto
      />
      <MarkerPin
        latitude={singapore.latitude}
        longitude={singapore.longitude}
      />
      <MarkerPin
        latitude={london.latitude}
        longitude={london.longitude}
      />
    </ReactMapGL>
  );
};

export default Map;

