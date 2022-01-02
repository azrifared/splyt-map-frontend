import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import styled from 'styled-components';

type Props = {
  isOpen: boolean;
  openPanel: (val: boolean) => void;
}

const FindButton: React.FC<Props> = ({
  isOpen, openPanel
}) => {

  return (
    <ButtonContainer>
      <PrimaryButton
        text='Find Splyt Office'
        onClick={() => openPanel(!isOpen)}
      />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 10%;
  margin: auto;
  left: 45%;
`;

export default FindButton;

