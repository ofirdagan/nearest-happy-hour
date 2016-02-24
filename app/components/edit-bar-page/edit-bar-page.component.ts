import {Component, OnInit} from "angular2/core";
import {PageManager, PAGE} from "../../services/page-manager.service";
import {BarsService} from "../../services/bars.service";
import {BarDto} from "../../model/model";
import {LocationService} from "../../services/location.service";
var mapbox = require("nativescript-mapbox");

@Component({
  selector: "EditBarPage",
  directives: [],
  template: `
<StackLayout>
  <Label [text]="bar.name" class="bar-title"></Label>
  <Button (tap)="saveBar()" text="Save"></Button>
</StackLayout>
`
})
export class EditBarPage implements OnInit {
  bar: BarDto;

  constructor(private pageManager: PageManager,
              private locationService: LocationService,
              private barsService: BarsService) {
    this.bar = <BarDto>(pageManager.getState().bar);

    //this.bar = {
    //  "id": "1",
    //  "name": "HaNevihim",
    //  "imageUrl": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p320x320/10978579_10153597627499167_7655655462103556409_n.jpg?oh=83de21a20a459d95f2d23d6bb50ec0df&oe=576D3EFE&__gda__=1465715334_18ff22e44987e5fab3161875087270fb",
    //  "location": {"latitude": 32.095035, "longitude": 34.778269},
    //  "rating": 4
    //};
  }

  ngOnInit() {
    setTimeout(() => {
      this.locationService.askForLocationPermission().then(() => this.showMap());
    }, 100);
  }

  showMap() {
    mapbox.show({
      accessToken: 'pk.eyJ1Ijoib2ZpcmQiLCJhIjoiY2lreWN3cGt6MDA1eHc5bTA3bWV3N3JnMyJ9.reFVeNDj24cakK_ZCD6S-A', // see 'Prerequisites' above
      style: 'emerald', // light|dark|emerald|satellite|streets , default 'streets'
      margins: {
        left: 0, // default 0
        right: 0, // default 0
        top: 200, // default 0
        bottom: 0 // default 0
      },
      center: { // optional without a default
        lat: this.bar.location.latitude,
        lng: this.bar.location.longitude
      },
      zoomLevel: 18.25, // 0-20, default 0
      showUserLocation: true, // default false - requires location permissions on Android which you can remove from AndroidManifest.xml if you don't need them
      hideAttribution: false, // default false, Mapbox requires this default if you're on a free plan
      hideLogo: false, // default false, Mapbox requires this default if you're on a free plan
      hideCompass: false, // default false
      disableRotation: false, // default false
      disableScroll: false, // default false
      disableZoom: false, // default false
      markers: [ // optional without a default
        {
          'lat': this.bar.location.latitude, // mandatory
          'lng': this.bar.location.longitude, // mandatory
          'title': this.bar.name, // recommended to pass in
          'subtitle': '' + this.bar.rating// one line is available on iOS, multiple on Android
        }
      ]
    }).then(
      function (result) {
        console.log("Mapbox show done");
      },
      function (error) {
        console.log("mapbox show error: " + error);
      }
    );
  }


  saveBar() {
    mapbox.hide();
    this.barsService.saveBar(this.bar);
    this.pageManager.goTo(PAGE.list);
  }
}