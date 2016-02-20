import {Component, OnInit, NgZone} from "angular2/core";
import {BarComponent} from "./bar.component";
import {BarsService} from "../services/bars.service";
import {Bar} from "../model/model";
import {OrderBy} from "../pipes/order-by.pipe";

@Component({
  selector: "BarList",
  directives: [BarComponent],
  providers: [BarsService],
  pipes: [OrderBy],
  template: `
<StackLayout orientation="vertical">
  <Bar class="bar-item" *ngFor="#bar of barsService.bars | orderBy:'distance':true" [bar]="bar"></Bar>
</StackLayout>
`,
})

export class BarListComponent implements OnInit {
  constructor(private barsService: BarsService) {
  }

  ngOnInit() {
    this.barsService.fetchBars();
  }
}