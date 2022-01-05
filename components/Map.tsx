import React, { useCallback, useEffect } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { SPLYT_OFFICE_LOCATION } from '../utils/constants';
import MarkerPin from './MarkerPin';
import MarkerCar from './MarkerCar';
import {
  userLocationState,
  viewPortState,
  driversState,
  intervalState
} from '../recoil';
import { Driver } from '../services/DriversApi';

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
  const [intervalValue, setIntervalValue] = useRecoilState(intervalState);
  const { state, contents } = useRecoilValueLoadable(driversState)
  const userLocationHandler = useCallback(({
    latitude, longitude
  }) => {
    setViewPort({ latitude, longitude });
    setUserLocation({ latitude, longitude });
  }, [userLocation]);
  const showDrivers = state !== 'loading' && contents?.data?.length > 0;
  const drivers = contents?.data as Driver[];

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalValue(intervalValue + 1)
    }, 20000);
    return () => clearInterval(interval);
  }, [intervalValue])

  return (
    <ReactMapGL
      {...viewPort}
      zoom={14}
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
      {showDrivers && drivers.map(({ location }) => (
        <MarkerCar
          key={Math.random()}
          latitude={location.latitude}
          longitude={location.longitude}
          bearing={location.bearing}
        />
      ))}
    </ReactMapGL>
  );
};

export default Map;

