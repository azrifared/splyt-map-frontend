import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import styled from 'styled-components';
import { ViewPort } from './Map';

type Props = {
  isOpen: boolean;
  openPanel: (val: boolean) => void;
  setViewPort: (vp: ViewPort) => void;
}

const FindButton: React.FC<Props> = ({
  isOpen, openPanel, setViewPort
}) => {

  return (
    <ButtonContainer>
      <Button
        text='Find Splyt Office'
        onClick={() => setViewPort({
          latitude: 1.285194,
          longitude: 103.8522982,
        })}
      />
      <Button
        text='Settings'
        onClick={() => openPanel(!isOpen)}
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

