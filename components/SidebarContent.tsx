import { PrimaryButton } from '@fluentui/react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import LocateOffice from './LocateOffice';
import LocateTaxi from './LocateTaxi';
import { sidebarState } from '../recoil';

const SidebarContent = () => {
  const [isOpen, openSidebar] = useRecoilState(sidebarState);
  
  return (
    <Container>
      <LocateOffice />
      <LocateTaxi />
      <ButtonContainer>
        <Button
          text='Apply'
          onClick={() => openSidebar(!isOpen)}
        />
        <Button
          text='Reset'
          onClick={() => openSidebar(!isOpen)}
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

