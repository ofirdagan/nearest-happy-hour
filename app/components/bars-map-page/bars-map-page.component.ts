import {Component, OnInit} from "angular2/core";
import {PageManager, PAGE} from "../../services/page-manager.service";
import {BarsService} from "../../services/bars.service";
import {BarDto} from "../../model/model";
import {LocationService} from "../../services/location.service";
import {Bar} from "../../model/model";
import {Location} from "../../model/model";
import {Tabs} from "../tabs.component";
var mapbox = require("nativescript-mapbox");

interface BarMarker {
  lat: number;
  lng: number;
  title: string;
  subtitle: string;
}

@Component({
  selector: "BarsMapPage",
  directives: [Tabs],
  template: `
  <Tabs></Tabs>
`
})
export class BarsMapPage implements OnInit {

  constructor(private locationService: LocationService,
              private barsService: BarsService) {
  }

  ngOnInit() {
    this.barsService.fetchBars();
    setTimeout(() => {
      this.locationService.askForLocationPermission().then(() => {
        this.locationService.getCurrentLocation().then(location => {
          this.showMap(location, this.buildMarkers());
        });
      });
    }, 5000);
  }

  buildMarkers(): BarMarker[] {
    let x = this.barsService.bars.map((bar) => {
      return {
        lat: bar.location.latitude,
        lng: bar.location.longitude,
        title: bar.name,
        subtitle: '' +bar.rating
      }
    });
    console.log(JSON.stringify(x));
    return x;
  }

  showMap(location: Location, markers) {
    mapbox.show({
      accessToken: 'pk.eyJ1Ijoib2ZpcmQiLCJhIjoiY2lreWN3cGt6MDA1eHc5bTA3bWV3N3JnMyJ9.reFVeNDj24cakK_ZCD6S-A', // see 'Prerequisites' above
      style: 'emerald', // light|dark|emerald|satellite|streets , default 'streets'
      margins: {
        left: 0, // default 0
        right: 0, // default 0
        top: 100, // default 0
        bottom: 0 // default 0
      },
      center: { // optional without a default
        lat: location.latitude,
        lng: location.longitude
      },
      zoomLevel: 15, // 0-20, default 0
      showUserLocation: true, // default false - requires location permissions on Android which you can remove from AndroidManifest.xml if you don't need them
      hideAttribution: false, // default false, Mapbox requires this default if you're on a free plan
      hideLogo: false, // default false, Mapbox requires this default if you're on a free plan
      hideCompass: false, // default false
      disableRotation: false, // default false
      disableScroll: false, // default false
      disableZoom: false, // default false
      markers: markers
    }).then(
      function (result) {
        console.log("Mapbox show done");
      },
      function (error) {
        console.log("mapbox show error: " + error);
      }
    );
  }
}