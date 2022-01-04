import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValue
} from 'recoil';
import { useForm } from './useForm'
import { SPLYT_OFFICE_LOCATION } from '../utils/constants';
import {
  sidebarState,
  officeState,
  viewPortState,
  userLocationState,
  countDriversState
} from '../recoil';

export const useSetting = () => {
  const [isOpen, openSidebar] = useRecoilState(sidebarState);
  const [office, setOffice] = useRecoilState(officeState);
  const setViewPort = useSetRecoilState(viewPortState);
  const userLocation = useRecoilValue(userLocationState);
  const [countDrivers, setCountDrivers] = useRecoilState(countDriversState);
  const formContext = useForm({
    initialValues: {
      office: office,
      displayedTaxis: countDrivers,
    },
    onSubmit: async ({ office, displayedTaxis }) => {
      setOffice(office);
      setViewPort(office
        ? SPLYT_OFFICE_LOCATION[office]
        : userLocation!
      );
      setCountDrivers(displayedTaxis!)
      openSidebar(!isOpen);
    }
  });

  return formContext;
}
