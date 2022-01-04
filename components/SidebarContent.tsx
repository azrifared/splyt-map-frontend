import { PrimaryButton } from '@fluentui/react';
import styled from 'styled-components';
import LocateOffice from './LocateOffice';
import LocateTaxi from './LocateTaxi';
import { useSetting } from '../utils/useSetting';

const SidebarContent = () => {
  const formContext = useSetting();

  return (
    <Container>
      <LocateOffice formContext={formContext} />
      <LocateTaxi formContext={formContext} />
      <ButtonContainer>
        <Button
          text='Apply'
          onClick={formContext.handleSubmit}
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

