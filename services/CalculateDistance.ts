import { SPLYT_OFFICE_LOCATION } from '../utils/constants';
import { Office } from '../recoil';

type GetDistanceParams = {
  lat1: number;
  lon1: number;
  lat2: number;
  lon2: number;
  unit: string;
}

type UserLocation = {
  latitude: number;
  longitude: number;
};

type NearestOffice = UserLocation & {
  location: Office;
}

export class CalculateDistance {
  private userLocation: UserLocation;

  constructor(userLocation: UserLocation) {
    this.userLocation = userLocation
  }

  public getDistance({
    lat1, lon1, lat2, lon2, unit
  }: GetDistanceParams) {  

    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
  
    else {
      const radlat1 = Math.PI * lat1/180;
      const radlat2 = Math.PI * lat2/180;
      const theta = lon1-lon2;
      const radtheta = Math.PI * theta/180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  
      if (dist > 1) {
        dist = 1;
      }
  
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
  
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      
      return dist;
    }
  }

  public getNearestOffice(): NearestOffice {
    const { latitude, longitude } = this.userLocation;
    const { london, singapore } = SPLYT_OFFICE_LOCATION;
    const londonDistance = this.getDistance({
      lat1: latitude,
      lat2: london.latitude,
      lon1: longitude,
      lon2: london.longitude,
      unit: 'K'
    })
    const singaporeDistance = this.getDistance({
      lat1: latitude,
      lat2: singapore.latitude,
      lon1: longitude,
      lon2: singapore.longitude,
      unit: 'K'
    })
  
    if (londonDistance > singaporeDistance) {
      return { ...singapore, location: 'singapore' };
    }
  
    return { ...london, location: 'london' };
  }
}
