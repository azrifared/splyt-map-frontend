import { atom, selector } from 'recoil';
import { DEFAULT_VIEW_PORT, SPLYT_OFFICE_LOCATION } from '../utils/constants';
import { DriversApi } from '../services/DriversApi';

type UserLocation = {
  latitude: number;
  longitude: number;
};

export type Office = 'london' | 'singapore';

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
});

/**
 * State to maintain office location
 */
export const officeState = atom<Office | undefined>({
  key: 'OfficeState',
  default: undefined
});

/**
 * State to mainatain numbers of displayed drivers
 */
export const countDriversState = atom<number>({
  key: 'CountDriversState',
  default: 10
})

/**
 * maintain interval state
 */
export const intervalState = atom({
  key: 'IntervalState',
  default: 0
})

/**
 * Handling drivers state
 */
export const driversState = selector({
  key: 'DriversState',
  get: async ({ get }) => {
    const office = get(officeState);
    const countDrivers = get(countDriversState);
    get(intervalState);
    
    if (!office) return undefined;

    try {
      const viewPort = SPLYT_OFFICE_LOCATION[office];
      const driversRecord = await DriversApi.getDrivers({
        ...viewPort,
        count: countDrivers
      });
      
      return driversRecord;
    } catch(error: any) {
      console.error(`Failed to get drivers record. ${error.message}`)
      return undefined;
    }
  }
})
