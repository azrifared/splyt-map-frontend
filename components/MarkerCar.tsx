import React from 'react';
import { Marker } from 'react-map-gl';
import styled from 'styled-components';
import { Logo } from './Logo';
import Car from '../images/car.png';

type Props = {
  latitude: number;
  longitude: number;
  bearing: number;
};

const MarkerPin: React.FC<Props> = ({
  latitude, longitude, bearing
}) => (
  <Marker
    latitude={latitude}
    longitude={longitude}
  >
    <RotateLogo
      src={Car.src}
      bearing={bearing}
    />
  </Marker>
);

type RotateLogoProps = {
  bearing: number;
};

const RotateLogo = styled(Logo)<RotateLogoProps>`
  -webkit-transform: ${({ bearing }) => `rotate(${bearing}deg)`};
  -moz-transform: ${({ bearing }) => `rotate(${bearing}deg)`};
  -o-transform: ${({ bearing }) => `rotate(${bearing}deg)`};
  -ms-transform: ${({ bearing }) => `rotate(${bearing}deg)`};
  transform: ${({ bearing }) => `rotate(${bearing}deg)`};
`;

export default MarkerPin;

