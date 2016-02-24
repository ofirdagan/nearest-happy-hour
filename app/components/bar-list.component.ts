import {Component, OnInit, NgZone} from "angular2/core";
import {BarComponent} from "./bar.component";
import {BarsService} from "../services/bars.service";
import {Bar} from "../model/model";
import {OrderBy} from "../pipes/order-by.pipe";
import {PageManager} from "../services/page-manager.service";
import {PAGE} from "../services/page-manager.service";

@Component({
  selector: "BarList",
  directives: [BarComponent],
  providers: [BarsService],
  pipes: [OrderBy],
  template: `
<StackLayout orientation="vertical">
  <Bar (onBarTap)="onBarTap($event)" class="bar-item" *ngFor="#bar of barsService.bars | orderBy:'distance':false" [bar]="bar"></Bar>
</StackLayout>
`,
})

export class BarListComponent implements OnInit {
  constructor(private barsService: BarsService, private pageManager: PageManager) {
  }

  ngOnInit() {
    this.barsService.fetchBars();
  }

  onBarTap(bar) {
    console.log('on bar tap');
    this.pageManager.goTo(PAGE.editBar, {bar});
  }
}