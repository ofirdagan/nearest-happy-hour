import {Injectable} from 'angular2/core';
import {Location} from "../model/model";
var geolocation = require("nativescript-geolocation");
//var geolib = require("geolib");

@Injectable()
export class LocationService {

  private getCurrentLocationReal() {
    return geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(loc => {
      if (loc) {
        console.log('LOCATION:', JSON.stringify(loc));
        return loc;
      } else {
        console.log('NO LOCATION');
      }
    }, (e) => {
      console.log("Error in LOCATION: " + e.message);
    });
  }

  private getCurrentLocationMock(): Promise<Location> {
    return Promise.resolve({latitude: 32.066649, longitude: 34.774953}); //maze 21
  }

  getCurrentLocation(): Promise<Location> {
    return this.getCurrentLocationMock();
  }

  getDistanceFromCurrentLocation(location: Location) {
    //if (!geolocation.isEnabled()) {
    //  geolocation.enableLocationRequest();
    //  return Promise.resolve(-1);
    //} else {
      return this.getCurrentLocationMock().then(currentLoc => {
        console.log('in getCurrentLocationMock', geolocation.distance(currentLoc, location));
        return geolocation.distance(currentLoc, location);
      });
    //}
  }
}