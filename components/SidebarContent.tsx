import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import styled from 'styled-components';
import LocateOffice from './LocateOffice';
import LocateTaxi from './LocateTaxi';

type Props = {
  isOpen: boolean;
  openPanel: (val: boolean) => void;
}

const SidebarContent: React.FC<Props> = ({
  isOpen, openPanel
}) => {
  
  return (
    <Container>
      <LocateOffice />
      <LocateTaxi />
      <ButtonContainer>
        <Button
          text='Apply'
          onClick={() => openPanel(!isOpen)}
        />
        <Button
          text='Reset'
          onClick={() => openPanel(!isOpen)}
        />
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  margin: 15px 0;
`;

const Button = styled(PrimaryButton)`
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;


export default SidebarContent;

