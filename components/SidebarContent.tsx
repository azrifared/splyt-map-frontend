import { useCallback } from 'react';
import { PrimaryButton } from '@fluentui/react';
import styled from 'styled-components';
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValue
} from 'recoil';
import LocateOffice from './LocateOffice';
import LocateTaxi from './LocateTaxi';
import { useForm } from '../utils/useForm';
import { SPLYT_OFFICE_LOCATION } from '../utils/constants';
import {
  sidebarState,
  officeState,
  viewPortState,
  userLocationState
} from '../recoil';

const SidebarContent = () => {
  const [isOpen, openSidebar] = useRecoilState(sidebarState);
  const [office, setOffice] = useRecoilState(officeState);
  const setViewPort = useSetRecoilState(viewPortState);
  const userLocation = useRecoilValue(userLocationState);
  const formContext = useForm({
    initialValues: {
      office: office,
      displayedTaxis: 0,
    },
    onSubmit: async ({ office, displayedTaxis }) => {
      setOffice(office);
      setViewPort(office
        ? SPLYT_OFFICE_LOCATION[office]
        : userLocation!
      );
      openSidebar(!isOpen);
    }
  });
  const resetHandler = useCallback(() => {
    formContext.handleChange({ name: 'office', value: undefined });
    formContext.handleChange({ name: 'displayedTaxis', value: 0 });
  }, []);


  return (
    <Container>
      <LocateOffice formContext={formContext} />
      <LocateTaxi />
      <ButtonContainer>
        <Button
          text='Apply'
          onClick={formContext.handleSubmit}
        />
        <Button
          text='Reset'
          onClick={resetHandler}
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

