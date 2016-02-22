import {Injectable} from 'angular2/core';
import {Location} from "../model/model";
var geolocation = require("nativescript-geolocation");
var mapbox = require("nativescript-mapbox");

@Injectable()
export class LocationService {
  defaultLocation: Location = {latitude: 40.7127837, longitude: 74.00594130000002}; //new york
  locationPromise: Promise<Location>;

  constructor() {
    setTimeout(() => this.initLocationService(), 100);
  }

  askForLocationPermission() {
    return new Promise(resolve => {
      mapbox.hasFineLocationPermission().then(granted => {
        if (!granted) {
          mapbox.requestFineLocationPermission().then(() => this.waitForPermission());
        }
        console.log('HAS LOCATION PERMISSIONS? ', granted);
        resolve(granted);
      }).catch(e => console.log('error: ', e));
    });
  }


  getCurrentLocation(): Promise<Location> {
    return this.locationPromise;
  }

  getDistanceFromCurrentLocation(location: Location) {
    return this.getCurrentLocation().then(currentLoc => {
      return geolocation.distance(currentLoc, location);
    });
  }

  private waitForPermission() {
    let unregister = setInterval(() => {
      mapbox.hasFineLocationPermission().then((granted) => {
        if (granted) {
          console.log('finally granted');
          this.initLocationService();
          clearInterval(unregister);
        }
      }, 1000);
    });
  }

  private initLocationService() {
    this.locationPromise = this.askForLocationPermission().then(() => {
      return this.getCurrentLocationReal();
    });
  }

  private getCurrentLocationReal() {
    return geolocation.getCurrentLocation({}).then(loc => {
      if (loc) {
        console.log('LOCATION:', JSON.stringify(loc));
        return {latitude: loc.latitude, longitude: loc.longitude};
      } else {
        console.log('NO LOCATION');
        return this.defaultLocation;
      }
    }, (e) => {
      console.log("Error in LOCATION: " + e.message);
      return this.defaultLocation;
    });
  }
}