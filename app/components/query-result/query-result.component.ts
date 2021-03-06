import {Component, Input} from "angular2/core";
import {BarsService} from "../../services/bars.service";
import {Bar} from "../../model/model";
import {PageManager} from "../../services/page-manager.service";
import {PAGE} from "../../services/page-manager.service";
import {BarDto} from "../../model/model";

@Component({
  selector: "QueryResult",
  providers: [],
  pipes: [],
  template: `
    <GridLayout columns="auto, *" rows="auto" (tap)="addBar()">
        <Image col="0" [src]="data.picture.data.url" class="bar-icon"></Image>
        <Label col="1" [text]="data.name" class="bar-title"></Label>
    </GridLayout>
`
})
export class QueryResult{
  @Input() data;
  constructor(private barsService: BarsService, private pageManager: PageManager) {}

  addBar() {
    let data = this.data;
    let barDto = new BarDto(data.id, data.name, data.picture.data.url, {latitude: data.location.latitude, longitude: data.location.longitude}, 0, data.phone, '');
    this.pageManager.goTo(PAGE.editBar, {bar: barDto});
  }
}