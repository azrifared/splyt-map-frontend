import React from 'react';
import styled from 'styled-components';
import LocateOffice from './LocateOffice';
import LocateTaxi from './LocateTaxi';

const SidebarContent = () => {
  return (
    <Container>
      <LocateOffice />
      <LocateTaxi />
    </Container>
  )
}

const Container = styled.div`
  margin: 15px 0;
`;


export default SidebarContent;

