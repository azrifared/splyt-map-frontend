import React, { useState } from 'react';
import styled from 'styled-components';
import { Slider } from '@fluentui/react';

const LocateTaxi = () => {
  const [value, setValue] = useState(0);
  
  return (
    <LocateContainer>
      <div>Display Available Taxis</div>
      <Slider
        value={value}
        lowerValue={0}
        max={20}
        min={0}
        onChange={(num) =>  setValue(num)}
      />
    </LocateContainer>
  )
}

const LocateContainer = styled.div`
  margin: 5px 0;
`;

export default LocateTaxi;

