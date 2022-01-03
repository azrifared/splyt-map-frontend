import { RecoilRoot } from 'recoil';
import Sidebar from '../components/Sidebar';
import FindButton from '../components/FindButton';
import Map from '../components/Map';

const Home = ({ mapToken }: { mapToken: string }) => {

  return (
    <RecoilRoot>
      <FindButton />
      <Sidebar />
      <Map mapToken={mapToken} />
    </RecoilRoot>
  );
};

export default Home;

