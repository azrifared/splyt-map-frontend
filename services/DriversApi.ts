import axios from 'axios';

type GetDriversParams = {
  latitude: number;
  longitude: number;
  count: number;
};

interface Location {
  latitude: number;
  longitude: number;
  bearing: number;
};

export interface Driver {
  driver_id: string;
  location: Location;
};

export interface DriversRecord {
  drivers: Driver[];
};

export class DriversApi {
  static host = 'http://localhost:8000';

  static async getDrivers({
    latitude, longitude, count
  }: GetDriversParams) {
    const params = new URLSearchParams({
      latitude: String(latitude),
      longitude: String(longitude),
      count: String(count)
    });
    const drivers = await axios.get<DriversRecord>(`${this.host}/drivers?${params}`);

    return drivers;
  }
}