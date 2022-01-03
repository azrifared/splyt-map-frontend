import React, { useCallback } from 'react';
import { PrimaryButton } from '@fluentui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { CalculateDistance } from '../utils/calculateDistance';
import {
  userLocationState,
  viewPortState,
  sidebarState
} from '../recoil';

const FindButton = () => {
  const userLocation = useRecoilValue(userLocationState);
  const [viewPort, setViewPort] = useRecoilState(viewPortState);
  const [isOpen, openSidebar] = useRecoilState(sidebarState);
  const viewPortHandler = useCallback(() => {
    if (!userLocation) return;

    const DistanceService = new CalculateDistance(userLocation)
    const officeViewPort = DistanceService.getNearestOffice();
    setViewPort(officeViewPort);
  }, [viewPort]);

  if (!userLocation) return <></>;

  return (
    <ButtonContainer>
      <Button
        text='Find Splyt Office'
        onClick={viewPortHandler}
      />
      <Button
        text='Settings'
        onClick={() => openSidebar(!isOpen)}
      />
    </ButtonContainer>
  );
};

const Button = styled(PrimaryButton)`
  width: 200px;
  margin: 5px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  bottom: 10%;
  margin: auto;
  left: 35%;
`;

export default FindButton;

