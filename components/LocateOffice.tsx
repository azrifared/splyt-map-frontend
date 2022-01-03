import React, { useCallback } from 'react';
import { DefaultButton } from '@fluentui/react';
import styled from 'styled-components';
import { FormContext } from '../utils/useForm';

type Props = {
  formContext: FormContext
}
const LocateOffice: React.FC<Props> = ({ formContext }) => {
  const changeHandler = useCallback((value) => {
    formContext.handleChange(
      { name: 'office', value }
    )
  }, [formContext]);

  return (
    <LocateContainer>
      <div>Office Location</div>
      <RadioButtons>
        <RadioButton
          text='Singapore'
          isActive={formContext.values.office === 'singapore'}
          onClick={() => changeHandler('singapore')}
        />
        <RadioButton
          text='London'
          isActive={formContext.values.office === 'london'}
          onClick={() => changeHandler('london')}
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

