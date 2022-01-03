import { atom } from 'recoil';
import { DEFAULT_VIEW_PORT } from '../utils/constants';

type UserLocation = {
  latitude: number;
  longitude: number;
};

/**
 * State to maintain user location based on latitude and longitude
 */
export const userLocationState = atom<UserLocation | undefined>({
  key: 'UserLocationState',
  default: undefined
});

/**
 * State to maintain view port based on latitude and longitude
 */
export const viewPortState = atom({
  key: 'ViewPortState',
  default: DEFAULT_VIEW_PORT
});

/**
 * State to maintain Sidebar panel
 */
export const sidebarState = atom({
  key: 'SidebarState',
  default: false
})