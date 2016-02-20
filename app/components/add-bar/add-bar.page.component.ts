import {Component, Input} from "angular2/core";
import {LocationService} from "../../services/location.service";
import {Location} from "../../model/model";
import {QueryResult} from "../query-result/query-result.component";
var debounce = require("debounce");

@Component({
  selector: "AddBarPage",
  directives: [QueryResult],
  template: `
<StackLayout orientation="vertical">
  <TextField hint="Search for your bar" [(ngModel)]="barName" (ngModelChange)="onChange($event)"></TextField>
  <QueryResult class="query-result-item" *ngFor="#result of queryResults" [data]="result"></QueryResult>
</StackLayout>
`
})
export class AddBarPage {
  public barName: string;
  public queryResults;

  constructor(private locationService: LocationService) {
  }

  onChange(value) {
    debounce(() => this.searchFacebook(value), 500)();
  }

  searchFacebook(value) {
    this.locationService.getCurrentLocation().then((location: Location) => {
      let fields = 'picture,name,location,phone';
      let maxDistance = 100000; //100KM
      let graphApi = `https://graph.facebook.com/search?q=${value}&type=place&center=${location.latitude},${location.longitude}&distance=${maxDistance}&fields=${fields}&access_token=1004596676291626|gxwY3QuOUHUTmPxuhWGoLN5ZqWg`;
      fetch(graphApi).then((response: any) => response.json())
        .then(response => {
          this.queryResults = response.data;
        })
    });
  }
}