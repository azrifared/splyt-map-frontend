import React, { useState } from 'react';
import { DefaultButton } from '@fluentui/react';
import styled from 'styled-components';

const LocateOffice = () => {
  const [buttonValue, setButtonValue] = useState({
    singapore: false,
    london: false
  });

  return (
    <LocateContainer>
      <div>Office Location</div>
      <RadioButtons>
        <RadioButton
          text='Singapore'
          isActive={buttonValue.singapore}
          onClick={() => setButtonValue({
            london: false,
            singapore: true
          })}
        />
        <RadioButton
          text='London'
          isActive={buttonValue.london}
          onClick={() => setButtonValue({
            london: true,
            singapore: false,
          })}
        />
      </RadioButtons>
    </LocateContainer>
  )
}

const RadioButtons = styled.div`
  display: flex;
  padding: 5px 0;
`;

type ButtonProps = {
  isActive: boolean;
}

const RadioButton = styled(DefaultButton)<ButtonProps>`
  width: 90px;
  background: ${({ isActive }) => isActive ? '#00BFFF' : '#e7e7e7'};
  color: ${({ isActive }) => isActive ? 'white' : 'black'};
  border: none;
  &:hover {
    background: #00BFFF;
    border: none;
    color: white;
  }
`;

const LocateContainer = styled.div`
  margin: 10px 0;
`;

export default LocateOffice;

