import React from 'react';
import { Marker } from 'react-map-gl';
import { Logo } from './Logo';
import Pin from '../images/pin.png';

type Props = {
  latitude: number;
  longitude: number;
};

const MarkerPin: React.FC<Props> = ({
  latitude, longitude
}) => (
  <Marker
    latitude={latitude}
    longitude={longitude}
  >
    <Logo src={Pin.src}/>
  </Marker>
);

export default MarkerPin;

