import React, { useState } from 'react';
import styled from 'styled-components';
import { Slider } from '@fluentui/react';
import { FormContext } from '../utils/useForm';

type Props = {
  formContext: FormContext
};

const LocateTaxi: React.FC<Props> = ({ formContext }) => {
  const [value, setValue] = useState(formContext.values.displayedTaxis);
  
  return (
    <LocateContainer>
      <div>Display Available Drivers</div>
      <Slider
        value={value}
        lowerValue={0}
        max={20}
        min={0}
        onChange={(num) => {
          setValue(num);
          formContext.handleChange({
            name: 'displayedTaxis', value: num
          })
        }}
      />
    </LocateContainer>
  )
}

const LocateContainer = styled.div`
  margin: 5px 0;
`;

export default LocateTaxi;

